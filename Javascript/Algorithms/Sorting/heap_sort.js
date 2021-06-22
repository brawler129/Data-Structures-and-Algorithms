// Here I have implemented Heap Sort to better understand and study Heap Sort

// A Max Heap implementation can be used to implement Heap Sort. As the max element always remains
// as the root element of the Heap. We can continually extractMax() and get the largest element and 
// place it in the rear of the array.

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

        return this.heap[child2Index] < this.heap[child1Index] ? child1Index : child2Index;
    }

    __buildMaxHeap(arr){
        // Buil a max heap from the provided array
        for (let element of arr){
            this.insert(element);
        }
    }


    display(){
        console.log(this.heap);
    }

    insert(value){
        if (this.heap.some(element => element === value)){
            return 'Element already exists';
        }
        this.heap.push(value)
        let i = this.heap.length - 1;
        let parentIndex = this.__parent(i);
        while (i > 0 && this.heap[parentIndex] < this.heap[i]){
            this.__swap(parentIndex, i);
            i = parentIndex;
            parentIndex = this.__parent(i);
        }
    }

    extractMax(){
        this.display();

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
        return maxValue
    }

    heapSort(arr){
        let sortedArray = [];
        this.__buildMaxHeap(arr);
        for (let i=1; i <= arr.length; i++){
            sortedArray[arr.length - i] = this.extractMax();
        }
        console.log(sortedArray);
    }

}


let myHeap = new MaxHeap();
myHeap.heapSort([5,6,3,1,8,7,4])

