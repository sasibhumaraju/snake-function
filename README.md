
# snake-function

snake-function is a NPM package, greets by using snake function.


## Installation

Install snake-function with npm

```bash
  npm install snake-function
```
    
## Usage/Example

```javascript
import snakeFunction from 'snake-function'

function SnakeGreetings() {
  const greetings = snakeFunction("sasibhumaraju")
  return greetings;
}

// OUTPUT: shhhhhhhhh... hello sasibhumaraju 🐍
```

### Input Validation

The `snakeFunction` now includes input validation. If a non-string value (e.g., number, object, array) is passed, it will return an error message.

```javascript
import snakeFunction from 'snake-function';

// Valid input
console.log(snakeFunction("sasibhumaraju")); 
// OUTPUT: shhhhhhhhh... hello sasibhumaraju 🐍

// Invalid input
console.log(snakeFunction(123)); 
// OUTPUT: Invalid input: please provide a string
```


## Author

- [@sasibhumaraju](https://www.github.com/sasibhumaraju)

Certainly! Here is the content formatted for a `README.md` file:
