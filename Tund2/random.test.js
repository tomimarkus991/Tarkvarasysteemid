function Random(min, max)
{
    return Math.random() * (max - min) + min;
}

const Random = require('./random.js');

test('random: between 1 and 5', () => {
const value = Random(1, 5);

expect(value).toBeGreaterThanOrEqual(1);
expect(value).toBeLessThanOrEqual(5);
});

test('random: mock value', () => {
    Random = jest.fn();
    Random.mockReturnValue(7);
    const value = random(1, 5);
    expect(value).toBe(7);

    expect(random.mock.calls[0][1])
});