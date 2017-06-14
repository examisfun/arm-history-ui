export function parseStandardTest(text: string): { question: string, possibleAnswers: any, subQuestion: string } {
    text = text.replace(/\n(?!\d[)])(?![ա-ֆ][․)])/g, " ");

    let possibleAnswerStart = /\n\d[)]/g.exec(text).index;

    return {
        question: text.substring(0, possibleAnswerStart).replace(/^\s\n+|\s\n+$/g, '').trim(),
        possibleAnswers: extractPossibleAnswers(text),
        subQuestion: null
    }
}

export function parseSubQuestionTest(text: string): { question: string, possibleAnswers: any, subQuestion: string } {
    let subQuestionStart = /\n[ա][.)]|\n[«]/g.exec(text).index;
    let subQuestionEnd = /\n[1)]/g.exec(text).index;

    return {
        possibleAnswers: extractPossibleAnswers(text),
        subQuestion: text.substring(subQuestionStart, subQuestionEnd).replace(/\n(?![ա-ֆ][.)])/g, " "),
        question: text.substring(0, subQuestionStart).replace(/^\s\n+|\s\n+$/g, '').trim()
    }
}

export function extractPossibleAnswers(text: string): any {
    let possibleAnswers: any = {};
    let match;

    let numberParenthesisRegex = /\d+[)]/g;
    let numberStartEndIndexes: Array<number> = [];

    while (match = numberParenthesisRegex.exec(text)) {
        numberStartEndIndexes.push(match.index, numberParenthesisRegex.lastIndex);
    }

    if (numberStartEndIndexes.length) {
        let textParts = getTextSubstrings(text, numberStartEndIndexes);

        for (let i = 1; i < textParts.length; i += 2) {
            let answerNumber = +textParts[i].substring(0, textParts[i].length - 1);
            let answerText = textParts[i + 1].replace(/^\s\n+|\s\n+$/g, '').trim();
            possibleAnswers[answerNumber] = answerText;
        }
    }

    return possibleAnswers;
}

export function extractQuestionNumber(text: string): { questionNumber: number, text: string } {
    let startNumberRegex = /^\d+[.]/g;
    let match = startNumberRegex.exec(text);

    let questionNumber = +text.substring(match.index, startNumberRegex.lastIndex - 1);
    let remainingText = text.substring(startNumberRegex.lastIndex, text.length).trim();

    return {
        questionNumber: questionNumber,
        text: remainingText
    }
}

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
    substringEnd = text.length;
    substrings.push(text.substring(substringStart, substringEnd));

    return substrings;
}