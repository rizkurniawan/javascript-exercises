const removeFromArray = function(...args) {
    let array = args[0];

    let result = [];

    array.forEach((item) => {
        if (!args.includes(item)) {
            result.push(item);
        }
    });
    
    return result;
};

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
// (removeFromArray([1, 2, 3, 4], 3, 2)


// Do not edit below this line
module.exports = removeFromArray;
