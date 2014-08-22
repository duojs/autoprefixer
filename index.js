'use strict';

var autoprefixerCore = require('autoprefixer-core');

module.exports = function duoAutoprefixer(opts) {
  opts = opts || {};

  var prefixer = autoprefixerCore(opts);

  return function autoprefixer(file) {
    if (file.type === 'css') {
      file.src = prefixer.process(file.src).css;
    }
  };
};
