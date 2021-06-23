// Here I have implemented Bredth First Search to better understand and study the algorithm

const { Queue } = require('../../Data Structures/Queue/queue_linked_list_implementation');
const { BinarySearchTree } = require('../../Data Structures/Trees/bst_implementation');

function bredthFirstSearch(tree){
    let queue = new Queue(); // This Queue takes up extra auxillary space. Children of all nodes of a level need to be stored in the queue. This can be a lot if the tree is very large.
    let currentNode = tree.root;
    let output = [];
    queue.enqueue(currentNode);

    while (!queue.isEmpty()){
        currentNode = queue.dequeue();
        output.push(currentNode.value);
        if (currentNode.left){
            queue.enqueue(currentNode.left);
        }
        if (currentNode.right){
            queue.enqueue(currentNode.right);
        }
    }
    return output;
}

function bredthFirstSearchR(queue, output){
    // Recursive approach
    if (queue.isEmpty()){
        return output;
    }
    let currentNode = queue.dequeue();
    output.push(currentNode.value);
    if (currentNode.left){
        queue.enqueue(currentNode.left);
    }
    if (currentNode.right){
        queue.enqueue(currentNode.right);
    }
    return bredthFirstSearchR(queue, output);
}

const input = [20,30,10,15,5,35,25]

let myBst = new BinarySearchTree(input)
console.log(bredthFirstSearch(myBst)) // Iterative approach

let queue = new Queue();
queue.enqueue(myBst.root);

console.log(bredthFirstSearchR(queue, [])) // Recursive approach


//      20
//    /     \
//  10      30
//  /  \    /  \
// 5    15  25  35