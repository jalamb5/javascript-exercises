const palindromes = function(string) {
    let newstring = string.toLowerCase();
    let array = newstring.match(/[a-z]/g);
    let yarra = [...array];
    yarra.reverse();
    let isPalindrome = false;
    for (i = 0; i < array.length; i++) {
        if (array[i] === yarra[i]) {
            isPalindrome = true;
        }
        else {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
