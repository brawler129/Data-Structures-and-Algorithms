// Here I have implemented a Binary Search Tree to better understand and study Binary Search Trees


function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}


class BinarySearchTree{

    constructor(array){
        this.root = null;
        for (let item of array){
            this.insert(item);
        }
    }

    insert(value){
        const newNode = new Node(value);
        if (this.root === null){
            this.root = newNode;
            return this.root;
        }
        let currentNode = this.root;
        while (currentNode){
            if (currentNode.value <= newNode.value){
                if (currentNode.right === null){
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
            else if (currentNode.value > newNode.value){
                if (currentNode.left === null){
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            }
        }
    }

    lookup(value){
        let currentNode = this.root;
        while (currentNode){
            if (currentNode.value === value){
                return value;
            }
            if (currentNode.value < value){
                currentNode = currentNode.right;
            }
            else{
                currentNode = currentNode.left;
            }
        }
        return null
    }

    getReplacementNode(node){
        // Auxilary function to find replacement node
        let parent = node;
        let child = node.right;
        if(!child.left){
            parent.right = child.right;
            return child;
        }
        while(child.left){
            parent = child;
            child = child.left;
        }
        parent.left = child.right;
        return child
    }

    remove(value){
        if (!this.root){
            return false;
        }

        let parentNode = null;
        let currentNode = this.root;
        while(currentNode){
            if (value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else if (value === currentNode.value){
                // Its a leaf node
                if (!currentNode.right && !currentNode.left){
                    // Leaf root node
                    if (!parentNode){
                        this.root = null;
                        return true;
                    }
                    if (currentNode.value < parentNode.value){
                        parentNode.left = null
                        return true;
                    }
                    else if (currentNode.value >= parentNode.value){
                        parentNode.right = null
                        return true;
                    }
                }
                // If node has no left subtree or no right subtree
                if (!currentNode.left || !currentNode.right){
                    let nonEmptyNode = currentNode.left || currentNode.right;
                    // If its a root node
                    if (!parentNode){
                        this.root = nonEmptyNode;
                        return true;
                    }
                    if (currentNode.value < parentNode.value){
                        parentNode.left = nonEmptyNode;
                        return true;
                    }
                    else if (currentNode.value > parentNode.value){
                        parentNode.right = nonEmptyNode;
                        return true;
                    }
                }
                // if node has both subtrees
                if (currentNode.left && currentNode.right){
                    let replacementNode = this.getReplacementNode(currentNode);
                    // If root node
                    if (!parentNode){
                        replacementNode.right = this.root.right;
                        replacementNode.left = this.root.left;
                        this.root = replacementNode;
                        return true
                    }
                    
                    replacementNode.right = currentNode.right;
                    replacementNode.left = currentNode.left;
                    // Determine whether to insert replacement node to left or right of parent node
                    if (currentNode.value < parentNode.value){
                        parentNode.left = replacementNode;
                        return true
                    }
                    if (currentNode.value >= parentNode.value){
                        parentNode.right = replacementNode;
                        return true;
                    }
                }
            }
        }
        return false;
    }
}

let myBst = new BinarySearchTree([20, 10, 30, 25, 21, 24])

myBst.remove(20)

console.log(JSON.stringify(traverse(myBst.root)))



