const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
    stack = [];
    length = 0;

    push(element) {
        this.length = this.stack.push(element);
    }

    pop() {
        let result = this.stack.pop();
        if (result !== undefined) {
            this.length -= 1;
        }
        return result;
    }

    peek() {
        return this.stack[this.length - 1];
    }
}

module.exports = {
    Stack
};
