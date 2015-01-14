# duo-autoprefixer

[![NPM version](https://img.shields.io/npm/v/duo-autoprefixer.svg?style=flat)](https://www.npmjs.com/package/duo-autoprefixer)
[![Build Status](https://travis-ci.org/duojs/autoprefixer.svg?branch=master)](https://travis-ci.org/duojs/autoprefixer) [![Coverage Status](https://img.shields.io/coveralls/duojs/autoprefixer.svg?style=flat)](https://coveralls.io/r/duojs/autoprefixer)
[![Dependency Status](https://img.shields.io/david/duojs/autoprefixer.svg?style=flat)](https://david-dm.org/duojs/autoprefixer)

[autoprefixer](https://github.com/postcss/autoprefixer) plugin for [duo](http://duojs.org/)

## Installation

```sh
$ npm install --save-dev duo-autoprefixer
```

## Usage

### Module

```javascript
var Duo = require('duo');
var autoprefixer = require('duo-autoprefixer');

var root = __dirname;

new Duo(root)
  .entry('index.css')
  .use(autoprefixer())
  .run(function(err, css) {
    // ...
  });
```

### CLI

This plugin can be used on CLI.

```sh
duo --use duo-autoprefixer in.css > out.css
```

However, you don't have to do that. You can use [autoprefixer binary](https://github.com/postcss/autoprefixer#cli) directly.

```sh
duo in.css | autoprefixer > out.css
```

## API

```javascript
var autoprefixer = require('duo-autoprefixer');
```

### autoprefixer([*options*])

*options*: `Object` (directly passed to [autoprefixer constructor](https://github.com/postcss/autoprefixer-core#usage) and [processor function](https://github.com/postcss/autoprefixer-core#css-processing))  
Return: `Function` (duo plugin)

There are some differences from the original:

* `from` option is by default automatically specified using [`file.path`](https://github.com/duojs/duo/blob/master/docs/api.md#duousefngen).

* `map` option is `false` by default.

* Only *inline* source map is available.

## License

Copyright (c) [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
