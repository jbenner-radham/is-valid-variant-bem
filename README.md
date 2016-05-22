# is-variant-bem [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Checks if a string is valid variant (double hyphen) BEM.

## Installation

```sh
$ npm install --save is-variant-bem
```

## Usage

```js
var isVariantBem = require('is-variant-bem');

isVariantBem('Rainbow'); // False
isVariantBem('block__element--modifier'); // True
```
## License

MIT © [James Benner](www.jamesbenner.com)


[npm-image]: https://img.shields.io/npm/v/is-variant-bem.svg
[npm-url]: https://npmjs.org/package/is-variant-bem
[travis-image]: https://travis-ci.org/jbenner-radham/is-variant-bem.svg?branch=master
[travis-url]: https://travis-ci.org/jbenner-radham/is-variant-bem
[daviddm-image]: https://david-dm.org/jbenner-radham/is-variant-bem.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jbenner-radham/is-variant-bem
