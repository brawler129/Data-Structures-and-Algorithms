


class MaxHeap{
    constructor(){
        this.heap = [];
    }

    __swap(i, j){
        // Swap elements at index i and j
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp
    }

    __parent(index){
        // Find index of parent of a node given the nodes index
        return (Math.floor((index + 1) / 2)) - 1;
    }

    __maxChild(index){
        // Find index of max child of a node given the nodes index
        let child1Index = (index + 1) * 2
        let child2Index = ((index + 1) * 2) - 1

        return this.heap[child2Index] > this.heap[child1Index] ? child2Index : child1Index;
    }


    display(){
        console.log(this.heap);
    }

    insert(value){
        if (this.heap.some(element => element === value)){
            return 'Element already exists';
        }
        console.log(`Inserting ${value}`);
        this.heap.push(value)
        let i = this.heap.length - 1;
        let parentIndex = this.__parent(i);
        while (i > 0 && this.heap[parentIndex] < this.heap[i]){
            this.__swap(parentIndex, i);
            i = parentIndex;
            parentIndex = this.__parent(i);
        }
        this.display();
    }

    extractMax(){
        let maxValue = this.heap[0];
        if (this.heap.length < 2){
            this.heap = [];
            return maxValue;
        }
        this.heap[0] = this.heap.pop();
        let i = 0;
        let temp = 0;
        while (this.heap[i] < this.heap[this.__maxChild(i)]){
            temp = this.__maxChild(i);
            this.__swap(i, this.__maxChild(i));
            i = temp;
        }
        console.log(`Max is ${maxValue}`);
        this.display();
        return maxValue
    }

}


let myHeap = new MaxHeap();

myHeap.insert(1);
myHeap.insert(2);
myHeap.insert(3);
myHeap.insert(0);
myHeap.insert(15);
myHeap.insert(6);
myHeap.insert(30);
myHeap.insert(31);

myHeap.extractMax();
// myHeap.extractMax();


