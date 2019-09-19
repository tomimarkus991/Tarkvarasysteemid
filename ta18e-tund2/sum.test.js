const sum = require('./sum.js');

test('sum "a"+5 is error', () => {
    expect(function() {
        sum('a', '5');
    }).toThrow('all arguments need to be numbers!!!');
});

test('errorror', () => {
    expect(function() {
        throw new Error();
    }).toThrow();
});

test('sum 1+2 => 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('sum 1+2 is not 5', () => {
    expect(sum(1, 2)).not.toBe(5);
});

// sum 3+5 is 8
// sum 1+ -5 is not 1
// sum 100+2 is greater than 100

