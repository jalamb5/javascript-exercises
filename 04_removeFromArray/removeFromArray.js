const removeFromArray = function(array, ...args) {
    let newarray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newarray.push(item);
        }
    })
    return newarray;

};

// Do not edit below this line
module.exports = removeFromArray;
