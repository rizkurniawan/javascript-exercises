const repeatString = function(word, numberOfword) {

    let result = '';

    if (numberOfword < 0) {
        return 'ERROR';
    }

    for (let i = 0; i < numberOfword; i++) {
        result += word;
    }

    return result;
};

// repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
