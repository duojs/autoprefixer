'use strict';

var autoprefixerCore = require('autoprefixer-core');
var tryit = require('tryit');
var xtend = require('xtend');

module.exports = function duoAutoprefixer(opts) {
  opts = xtend({map: false}, opts || {});
  if (opts.map && opts.map !== true) {
    opts.map = xtend(opts.map, {inline: true});
  }

  var prefixer = autoprefixerCore(opts);

  return function autoprefixer(file, entry, done) {
    if (file.type !== 'css') {
      done();
      return;
    }

    tryit(function() {
      file.src = prefixer.process(file.src, xtend({from: file.path}, opts)).css;
    }, done);
  };
};
