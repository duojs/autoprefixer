# duo-autoprefixer [![Build Status](https://travis-ci.org/duojs/autoprefixer.svg?branch=master)](https://travis-ci.org/duojs/autoprefixer) [![Coverage Status](https://img.shields.io/coveralls/duojs/autoprefixer.svg)](https://coveralls.io/r/duojs/autoprefixer)

[autoprefixer](https://github.com/postcss/autoprefixer) plugin for [duo](http://duojs.org/)

## Installation

```sh
$ npm install --save-dev duo-autoprefixer
```

## Usage

### Node module

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

*options*: `Object`

[All *autoprefixer-core* options](https://github.com/postcss/autoprefixer-core#usage) are available. However, there are some differences from the original:

* `from` option is by default automatically specified using [`file.path`](https://github.com/duojs/duo/blob/master/docs/api.md#duousefngen).

* `map` option is `false` by default.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
