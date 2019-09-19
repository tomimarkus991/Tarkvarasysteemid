let random = function (min, max) {
    return Math.random() * (max - min) + min;
};

test('random: between 1 and 5', () => {
    const value = random(1, 5);

    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(5);
});



test('random: mock value', () => {
    random = jest.fn();
    random.mockReturnValue(7);

    const value = random(1, 5);
    expect(value).toBe(7);

    expect(random.mock.calls[0][0]).toBe(1);
    expect(random.mock.calls[0][1]).toBe(5);
});

// add few tests...
// - get value between 1 and 5 ... and test it is 
// - get value between 1 and 5, mock return 7 ... 
//  - test value is 7
//  - test params was 1 and 5