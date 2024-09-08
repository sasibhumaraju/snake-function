export default function SnakeFunction(name) {
    if (typeof name !== 'string') {
        return "Invalid input: please provide a string";
    }
    return `shhhhhhhhh... hello ${name} 🐍`;
}