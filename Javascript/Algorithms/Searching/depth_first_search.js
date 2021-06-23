// Here I have implemented Depth First Search to better understand and study the Algorithm


const { BinarySearchTree } = require('../../Data Structures/Trees/bst_implementation');


function inOrderTraversal(root, list){
    // left , root, right
    // Inorder literally means In - Order => The returned list is sorted in order.
    // Useful in verifying if the tree is a valid BST. And also getting the tree as a sorted array.
    if (root.left){
        inOrderTraversal(root.left, list);
    }
    list.push(root.value);
    if (root.right){
        inOrderTraversal(root.right, list);
    }
    return list;
}

function preOrderTraversal(root, list){
    // root, left, right
    // Useful in storing the tree as an array such that it can be recreated later.
    // This is so because we know the root to be the first element
    list.push(root.value);
    if (root.left){
        preOrderTraversal(root.left, list);
    }
    if (root.right){
        preOrderTraversal(root.right, list);
    }
    return list;
}

function postOrderTraversal(root, list){
    // left, right, root
    // Here the last element is the root
    if (root.left){
        postOrderTraversal(root.left, list);
    }
    if (root.right){
        postOrderTraversal(root.right, list);
    }
    list.push(root.value);
    return list;
}


const input = [20,30,10,15,5,35,25];
let myBst = new BinarySearchTree(input);

//      20
//    /     \
//  10      30
//  /  \    /  \
// 5    15  25  35

console.log(inOrderTraversal(myBst.root, []))
console.log(preOrderTraversal(myBst.root, []))
console.log(postOrderTraversal(myBst.root, []))