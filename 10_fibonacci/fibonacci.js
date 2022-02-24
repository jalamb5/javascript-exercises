const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    };
    let sequence = [1, 1,];
    for (i = 1; i < num; i++) {
        sequence.push(sequence[i] + sequence[i - 1])
    }
    return sequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
