// Here I have implemented a Queue using Stacks


class CrazyQueue{
    constructor(){
        this.first = [];
        this.last = [];
        this.length = 0;
    }

    isEmpty(){
        return this.length < 1 ? true : false;
    }

    display(){
        const len = this.first.length
        for (let i = 0; i < len; i++){
            this.last.push(this.first.pop())
        }
        console.log(this.last)
    }

    enqueue(value){
        const len = this.first.length
        for (let i = 0; i < len; i++){
            this.last.push(this.first.pop())
        }
        this.last.push(value);
        this.length++;
    }

    dequeue(){
        if (this.isEmpty()){
            console.log("Queye is empty")
            return
        }
        const len = this.last.length
        for (let i=0; i < len; i++) {
            this.first.push(this.last.pop())
        }
        const poppedValue = this.first.pop()
        this.length--;
        return poppedValue
    }

    peek(){
        if (this.last.length > 0){
            return this.last[0]
        }
        return this.first[this.first.length - 1]
    }
}


let crazyQueue = new CrazyQueue()
console.log(crazyQueue.peek())
crazyQueue.enqueue(1)
crazyQueue.enqueue(2)
crazyQueue.enqueue(3)
crazyQueue.enqueue(3)
crazyQueue.display()
console.log(crazyQueue.dequeue())
console.log(crazyQueue.dequeue())
crazyQueue.enqueue(4)
crazyQueue.enqueue(5)
crazyQueue.enqueue(5)
crazyQueue.display()
console.log(crazyQueue.peek())