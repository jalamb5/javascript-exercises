const repeatString = function(string, num) {
    let newstring = '';
    if (num < 0) {
        return 'ERROR';
    }
    else {
        for (let i = num; i > 0; i--) {
            newstring += string;
        }
        return newstring;
}
};

// Do not edit below this line
module.exports = repeatString;
