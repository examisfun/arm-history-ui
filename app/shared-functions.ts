export function getTextSubstrings(text: string, indexes: Array<number>): Array<string> {
    indexes = indexes.sort((a, b) => a - b);

let substrings: Array<string> = [];
let substringStart = 0;
let substringEnd: number;

indexes.forEach(index => {
    substringEnd = index;
    substrings.push(text.substring(substringStart, substringEnd));
    substringStart = index;
});
substringEnd = text.length - 1;
substrings.push(text.substring(substringStart, substringEnd));

return substrings;
}