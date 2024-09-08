const SnakeFunction = require('./index.js');

describe('SnakeFunction', () => {
    it('should return a greeting message if input is a string', () => {
        expect(SnakeFunction('Alice')).toBe('shhhhhhhhh... hello Alice 🐍');
    });

    it('should return an error message if input is a number', () => {
        expect(SnakeFunction(123)).toBe('Invalid input: please provide a string');
    });

    it('should return an error message if input is an object', () => {
        expect(SnakeFunction({})).toBe('Invalid input: please provide a string');
    });

    it('should return an error message if input is an array', () => {
        expect(SnakeFunction([])).toBe('Invalid input: please provide a string');
    });

    it('should return an error message if input is null', () => {
        expect(SnakeFunction(null)).toBe('Invalid input: please provide a string');
    });

    it('should return an error message if input is undefined', () => {
        expect(SnakeFunction(undefined)).toBe('Invalid input: please provide a string');
    });
});
