'use strict';

var autoprefixerCore = require('autoprefixer-core');
var xtend = require('xtend');

module.exports = function duoAutoprefixer(opts) {
  opts = xtend({map: false}, opts || {});

  var prefixer = autoprefixerCore(opts);

  return function autoprefixer(file) {
    if (file.type === 'css') {
      file.src = prefixer.process(file.src, xtend({from: file.path}, opts)).css;
    }
  };
};
