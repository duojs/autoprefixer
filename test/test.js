'use strict';

var path = require('path');
var fs = require('fs');

var autoprefixer = require('..');
var Duo = require('duo');
var rimraf = require('rimraf');
var test = require('tape');

rimraf.sync(path.join(__dirname, 'tmp'));

test('duo-autoprefixer', function(t) {
  t.plan(9);

  new Duo(path.join(__dirname, 'tmp', '0'))
  .use(autoprefixer())
  .entry(path.join(__dirname, 'fixture.css'))
  .run(function(err, css) {
    var expected = [
      'a {',
      '  -webkit-transform: none;',
      '      -ms-transform: none;',
      '          transform: none;',
      '}',
      ''
    ].join('\n');

    t.deepEqual([err, css], [null, expected], 'should add vendor-prefix to CSS.');
  });

  new Duo(path.join(__dirname, 'tmp', '1'))
  .use(autoprefixer({
    browsers: ['ff > 2'],
    cascade: false
  }))
  .entry(path.join(__dirname, 'fixture.css'))
  .run(function(err, css) {
    var expected = [
      'a {',
      '  -moz-transform: none;',
      '  transform: none;',
      '}',
      '',
    ].join('\n');

    t.deepEqual([err, css], [null, expected], 'should support autoprefixer options.');
  });

  new Duo(path.join(__dirname, 'tmp', '1'))
  .use(autoprefixer({
    safe: true,
    map: {inline: true}
  }))
  .entry(path.join(__dirname, 'fixture-corrupt.css'))
  .run(function(err, css) {
    t.strictEqual(err, null, 'should support PostCSS options.');
    t.ok(
      /sourceMappingURL=data:application/.test(css),
      'should reflect PostCSS options to the output.'
    );
  });

  new Duo(path.join(__dirname, 'tmp', '2'))
  .use(autoprefixer())
  .entry(path.join(__dirname, 'fixture-notcss.js'))
  .run(function(err, js) {
    t.error(err, 'should not fail when it does\'t transform any files.');
    t.ok(/'This is not CSS!/.test(js), 'should not touch any files without .css extension.');
  });

  new Duo(path.join(__dirname, 'tmp', '3'))
  .use(autoprefixer())
  .entry(path.join(__dirname, 'fixture-corrupt.css'))
  .run(function(err) {
    t.equal(err.name, 'CssSyntaxError', 'should fail when CSS is corrupt.');
    t.equal(
      err.file,
      this._entry.attrs.path,
      'should reflect file path to the error message.'
    );
    t.equal(
      err.source,
      'Not CSS.\n',
      'should reflect file contents to the error message.'
    );
  });
});
