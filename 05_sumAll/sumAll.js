const sumAll = function(numOne, numTwo) {
    if (numOne < 0 || numTwo < 0 || !Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
        return 'ERROR';
    }
    else {
        let bigNum = (numTwo > numOne) ? numTwo : numOne;
        let smallNum = (numTwo < numOne) ? numTwo : numOne;
        let sum = 0;
        for (let i = smallNum; i <= bigNum; i++) {
            sum += i;
        }

        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
