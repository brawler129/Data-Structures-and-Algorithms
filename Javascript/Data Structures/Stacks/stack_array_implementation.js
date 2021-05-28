// Here I have created a Stack implementation using Linked Lists to better understand Stacks


class Stack{

    constructor(){
        this.stack = []
    }

    push(item){
        this.stack.push(item)
        return this.stack
    }

    pop(){
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }
}

let myStack = new Stack()
console.log(myStack.push(1))
console.log(myStack.push(2))
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.push(3))
console.log(myStack.peek())