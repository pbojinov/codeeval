function solution(N) {
    return binaryPeriod(N);
}

function binaryPeriod(number) {
    var binary = numberToBinary(number), //string S
        binaryLength = binary.length, //Q characters
        period = Math.floor(binaryLength / 2) - 1, //P < Q/2
        substringX = binary.substring(0, period),
        substringY = binary.substring(period, (period * 2));
    
    if (substringX == substringY) {
        return period;
    }
    else {
        return -1;
    }
}

/**
 * @method numberToBinary
 * Convert an integer to a binary string
 * Note: Our input is always going to be positive
 *
 * @param number {integer}
 */
function numberToBinary(number) {
    if (number >= 0) {
        return number.toString(2); //radix = 2 for binary
    }
    else {
        //we would flip the bits and add 1
        throw "numberToBinary() : invalid input, passed in a negative number";
    }
}
