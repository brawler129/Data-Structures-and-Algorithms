// Here I have implemented a Queue Data Structure using Linked Lists to better understand Queues


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    display(){
        if(this.isEmpty()){
            console.log("Empty")
            return
        }
        let currentNode = this.first
        let queue = []
        while(currentNode){
            queue.push(currentNode.value)
            currentNode = currentNode.next
        }
        return
    }

    peek(){
        if(this.isEmpty()){
            console.log("Empty")
            return
        }
        return this.first.value
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this.display()
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Empty")
            return
        }
        const dequeuedNode = this.first;
        this.first = this.first.next;
        this.length--;
        if(!this.first){
            this.last = null;
        }
        return dequeuedNode.value
    }

    isEmpty(){
        return this.length < 1 ? true : false;
    }
}


// let myQueue = new Queue()
// myQueue.display()
// myQueue.enqueue(1)
// myQueue.enqueue(3)
// myQueue.enqueue(4)
// myQueue.dequeue()
// myQueue.peek()
// myQueue.enqueue(10)
// myQueue.dequeue()   
// myQueue.display()

exports.Queue = Queue;