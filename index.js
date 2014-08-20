'use strict';

var prefix = require('autoprefixer');

module.exports = function duoAutoprefixer(opts) {
  opts = opts || {};

  return function autoprefixer(file) {
    if (file.type === 'css') {
      file.src = prefix(opts.browsers, opts).process(file.src, opts).css;
    }
  };
};
