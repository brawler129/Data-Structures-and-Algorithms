// Here I have created a Stack implementation using Linked Lists to better understand Stacks

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class Stack{

    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0
    }

    peek(){
        return this.top ? this.top.value : null;
    }

    push(value){
        let newNode = new Node(value);
        if( this.isEmpty()){
            this.top = newNode;
            this.bottom = newNode;
        }
        else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this
    }

    pop(){
        if (!this.top){
            return null
        }
        let poppedNode = this.top;
        this.top = this.top.next;
        this.length--;
        if (this.isEmpty()){
            this.bottom = null;
        }
        return poppedNode.value;
    }

    isEmpty(){
        return this.length < 1 ? true : false;
    }
}

let myStack = new Stack()

console.log(myStack.pop())
console.log(myStack.push(1))
console.log(myStack.peek())
console.log(myStack.push(2))
console.log(myStack.push(3))
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.peek())