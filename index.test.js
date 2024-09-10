const SnakeFunction = require('./index');

test('should return the correct snake function message for a string input', () => {
    expect(SnakeFunction("world")).toBe("shhhhhhhhh... hello world 🐍");
});

test('should return an error message for a number input', () => {
    expect(SnakeFunction(123)).toBe("Invalid input: please provide a string");
});

test('should return an error message for an object input', () => {
    expect(SnakeFunction({})).toBe("Invalid input: please provide a string");
});

test('should return an error message for an array input', () => {
    expect(SnakeFunction([])).toBe("Invalid input: please provide a string");
});