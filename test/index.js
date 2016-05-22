'use strict';

const expect       = require('chai').expect;
const isVariantBem = require('../lib');

describe('is-variant-bem', function () {
    it('should validate "block__element--modifier"', function () {
        expect(isVariantBem('block__element--modifier'));
    });

    it('should validate "block__element"', function () {
        expect(isVariantBem('block__element'));
    });

    it('should validate "block--modifier"', function () {
        expect(isVariantBem('block--modifier'));
    });
});
