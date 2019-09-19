function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('all arguments need to be numbers!!!');
    }
    return a + b;
}

module.exports = sum;