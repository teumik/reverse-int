module.exports = function reverse (n) {
    if (n > 9999999999999998) {
        return 'Please, enter a number less than 9999999999999998! JS can\'t do this...'
    }
    const stringNumber = Math.abs(n).toString();
    let result = '';
    for (let i = 0; i < stringNumber.length; i++) {
        result = `${stringNumber[i]}${result}`;
    }
    /* 
    // Break commit in case of... if you want something spicy!
    if (n.toString()[0] === '-') {
        result = `${'-'}${result}`;
    }
    */
    return result;
}
