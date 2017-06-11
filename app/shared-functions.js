"use strict";
function getTextSubstrings(text, indexes) {
    indexes = indexes.sort(function (a, b) { return a - b; });
    var substrings = [];
    var substringStart = 0;
    var substringEnd;
    indexes.forEach(function (index) {
        substringEnd = index;
        substrings.push(text.substring(substringStart, substringEnd));
        substringStart = index;
    });
    substringEnd = text.length - 1;
    substrings.push(text.substring(substringStart, substringEnd));
    return substrings;
}
exports.getTextSubstrings = getTextSubstrings;
//# sourceMappingURL=shared-functions.js.map