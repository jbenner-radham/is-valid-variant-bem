'use strict';

module.exports = function (className) {
    const WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)?';

    let blockElementModifierRegEx = new RegExp(`^(${WORD})__(${WORD})--(${WORD})$`);
    let blockElementRegEx         = new RegExp(`^(${WORD})__(${WORD})$`);
    let blockModifierRegEx        = new RegExp(`^(${WORD})--(${WORD})$`);

    return  blockElementModifierRegEx.test(className) ||
            blockElementRegEx.test(className)         ||
            blockModifierRegEx.test(className);
};
