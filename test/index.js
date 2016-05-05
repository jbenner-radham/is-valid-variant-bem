'use strict';

const expect            = require('chai').expect;
const isValidVariantBem = require('../lib');

describe('is-valid-variant-bem', function () {
    it('should validate "block__element--modifier"', function () {
        expect(isValidVariantBem('block__element--modifier'));
    });

    it('should validate "block__element"', function () {
        expect(isValidVariantBem('block__element'));
    });

    it('should validate "block--modifier"', function () {
        expect(isValidVariantBem('block--modifier'));
    });
});
