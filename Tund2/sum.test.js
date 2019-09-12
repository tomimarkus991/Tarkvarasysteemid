const Add = require('./sum.js');

// test('sum 1+2 =>3', () =>
// {
//     expect(Add(1,2)).toBe(3);
// });

// test('sum 3+5 =>8', () =>
// {
//     expect(Add(3,5)).toBe(8);
// });

// test('sum 1+ (-5) is not 1', () =>
// {
//     expect(Add(1,-5)).not.toBe(1);
// });

// test('sum 100+2 =>102', () =>
// {
//     expect(Add(100,2)).toBeGreaterThan(100);
// });

// test('sum 1+3 => 8', () =>
// {
//     expect(Add(1,3)).toBeLessThan(8);
// });

test('sum "1"+2 is error', () =>
{
    expect(function()
    {Add("a", "5")
    }).toThrow("Peavad numbrid olema");
});

//console.log('sum(5, 10)', Add(5,10))