const subtract = require('./subtract');


test('properly substracting two numbers', () => {
    expect(subtract(3,2)).toBe(1)
})