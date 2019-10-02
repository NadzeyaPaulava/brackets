module.exports = function check(str, bracketsConfig) {
    // your solution
    const regExpSeparator = new RegExp(bracketsConfig.map(aBracket => {
        return aBracket.map(oBracket => {
            if (!Number.isInteger(parseInt(oBracket, 10))) {
                return '\\' + oBracket;
            }
            return oBracket;
        }).join('')
    }).join('\|'), 'g');
    return !(replaceBracket(str, regExpSeparator).length);
}

function replaceBracket(str, regExpSeparator) {
    if (str.match(regExpSeparator)) {
        return replaceBracket(str.replace(regExpSeparator, ''), regExpSeparator);
    }
    return str;
}
