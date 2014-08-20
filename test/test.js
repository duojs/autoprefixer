'use strict';

var path = require('path');

var autoprefixer = require('require-main')();
var Duo = require('duo');
var rimraf = require('rimraf');
var test = require('tape');

rimraf.sync(path.join(__dirname, 'tmp'));

test('duo-autoprefixer', function(t) {
  t.plan(3);

  Duo(path.join(__dirname, 'tmp', '0'))
  .use(autoprefixer())
  .entry(path.join(__dirname, 'fixture.css'))
  .run(function(err, css) {
    if (err) {
      t.fail(err.message);
    }
    
    t.equal(
      css,
      'a {\n' +
      '  -webkit-transform: none;\n' +
      '      -ms-transform: none;\n'+
      '          transform: none;\n' +
      '}\n',
      'should add vendor-prefix to CSS.'
    );
  });

  Duo(path.join(__dirname, 'tmp', '1'))
  .use(autoprefixer({
    browsers: ['ff > 2'],
    cascade: false,
    safe: true
  }))
  .entry(path.join(__dirname, 'fixture.css'))
  .run(function(err, css) {
    if (err) {
      t.fail(err.message);
    }
    
    t.equal(
      css, 'a {\n  -moz-transform: none;\n  transform: none;\n}\n',
      'should accept options.'
    );
  });

  Duo(path.join(__dirname, 'tmp', '2'))
  .use(autoprefixer({
    browsers: ['ff > 2'],
    cascade: false,
    safe: true
  }))
  .entry(path.join(__dirname, 'fixture-corrupt.css'))
  .run(function(err, css) {
    t.assert(err, 'should  fail when the CSS is corrupt.');
  });
});
