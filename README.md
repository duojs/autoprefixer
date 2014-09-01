# duo-autoprefixer [![Build Status](https://travis-ci.org/duojs/autoprefixer.svg?branch=master)](https://travis-ci.org/duojs/autoprefixer)


[autoprefixer](https://github.com/ai/autoprefixer) plugin for [duo](https://www.npmjs.org/package/duo)

## Installation

[Install with npm](https://www.npmjs.org/doc/cli/npm-install.html). (Make sure you have installed [Node][node])

```
npm install --save-dev duo-autoprefixer
```

## Usage

### Node module

```javascript
var Duo = require('duo');
var autoprefixer = require('duo-autoprefixer');

var root = __dirname;

Duo(root)
  .entry('index.css')
  .use(autoprefixer())
  .run(function(err, css) {
    // ...
  });
```

### CLI

This plugin can be used on CLI.

```
duo --use duo-autoprefixer in.css > out.css
```

However, you don't have to do that. You can use [autoprefixer binary](https://github.com/postcss/autoprefixer#cli) directly.

```
duo in.css | autoprefixer > out.css
```

## API

```javascript
var autoprefixer = require('duo-autoprefixer');
```

### autoprefixer([*options*])

*options*: `Object`

#### options.browsers

Type: `Array`

Directly passed to [browsers](https://github.com/postcss/autoprefixer#browsers) option.

#### options.cascade

Type: `Boolean`
Default: `true`

Directly passed to [cascade](https://github.com/postcss/autoprefixer#visual-cascade) option.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
