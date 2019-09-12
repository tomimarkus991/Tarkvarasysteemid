const Substract = require('./minus.js');

test('minus 1-2 =>-1', () =>
{
    expect(Substract(1,2)).toBe(-1);
});