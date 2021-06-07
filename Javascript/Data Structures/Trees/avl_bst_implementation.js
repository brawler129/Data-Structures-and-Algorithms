// Here I have implemented a AVL Binary Search Tree to better understand and study AVL
// Binary Search Trees


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

    get balanceFactor(){
        return this.leftHeight - this.rightHeight;
    }

    get height(){
        if (!this.left && !this.right){
            return 0;
        }
        return Math.max(this.left? this.left.height: 0, this.right? this.right.height : 0) + 1;
    }

    get leftHeight(){
        return this.left? this.left.height + 1 : 0;
    }

    get rightHeight(){
        return this.right? this.right.height + 1 : 0;
    }

    get isBalanced(){
        let balanceFactor = this.balanceFactor;
        if (balanceFactor < 2 && balanceFactor > -2){
            return true;
        }
        return false;
    }
}


class AVLTree{

    constructor(array){
        this.root = null;
        for (let item of array){
            this.insert(item);
        }
    }

    rotateRight(root){
        let leftChild = root.left;
        root.left = leftChild.right;
        leftChild.right = root;
        return leftChild
    }

    rotateLeft(root){
        let rightChild = root.right;
        root.right = rightChild.left;
        rightChild.left = root;
        return rightChild;
    }

    rotateLeftRight(root){
        root.left = this.rotateLeft(root.left);
        return this.rotateRight(root);
    }

    rotateRightLeft(root){
        root.right = this.rotateRight(root.right);
        return this.rotateLeft(root)
    }

    balanceSubTree(root){
        // Control reaches here only if the sub-tree is imbalanced for sure

        // Imbalance is on the left side
        if (root.balanceFactor > 0){
            // Perform either right rotation or left-right rotation
            if (root.left.balanceFactor > 0){
                // Perform right rotation
                return this.rotateRight(root)
            }
            else{
                return this.rotateLeftRight(root);
            }
        }
        // Imbalance is on the right side
        else if (root.balanceFactor < 0){
            // Perform either left rotation or right-left rotation
            if (root.right.balanceFactor < 0 ){
                // Perform left rotation
                return this.rotateLeft(root)
            }
            else{
                // Perform right left rotation
                return this.rotateRightLeft(root);
            }
        }
    }

    insertHelper(root, newNode){
        if (root === null){
            return null;
        }
        let node = this.insertHelper(newNode.value < root.value ? root.left : root.right, newNode)

        if (newNode.value < root.value){
            root.left = node === null ? newNode : node;
        }
        else{
            root.right = node === null? newNode : node;
        }
        if (!root.isBalanced){
            return this.balanceSubTree(root);
        }
        return root
    }

    insert(value){
        const newNode = new Node(value);
        if (this.root === null){
            this.root = newNode;
            return this.root;
        }
        else{
            this.root = this.insertHelper(this.root, newNode)
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

    removeHelper(parentNode, currentNode, value){
        if (currentNode.value === value){
            // Its a leaf node
            if (!currentNode.right && !currentNode.left){
                // Leaf root node
                if (!parentNode){
                    return null
                }
                if (currentNode.value < parentNode.value){
                    parentNode.left = null
                }
                else if (currentNode.value >= parentNode.value){
                    parentNode.right = null
                }
                return parentNode;
            }
            // If node has no left subtree or no right subtree
            if (!currentNode.left || !currentNode.right){
                let nonEmptyNode = currentNode.left || currentNode.right;
                // If its a root node
                if (!parentNode){
                    return nonEmptyNode;
                }
                if (currentNode.value < parentNode.value){
                    parentNode.left = nonEmptyNode;
                }
                else if (currentNode.value > parentNode.value){
                    parentNode.right = nonEmptyNode;
                }
                return parentNode;
            }
            // if node has both subtrees
            if (currentNode.left && currentNode.right){
                let replacementNode = this.getReplacementNode(currentNode);
                // If root node
                if (!parentNode){
                    replacementNode.right = this.root.right? this.root.right.isBalanced? this.root.right : this.balanceSubTree(this.root.right) : this.root.right;
                    replacementNode.left = this.root.left;
                    return replacementNode;
                }
                
                replacementNode.right = currentNode.right? currentNode.isBalanced? currentNode.right : this.balanceSubTree(currentNode.right) : currentNode.right;
                replacementNode.left = currentNode.left;
                // Determine whether to insert replacement node to left or right of parent node
                if (currentNode.value < parentNode.value){
                    parentNode.left = replacementNode;
                }
                if (currentNode.value >= parentNode.value){
                    parentNode.right = replacementNode;
                }
                return replacementNode;
            }
        }
        else if (value < currentNode.value){
            this.removeHelper(currentNode, currentNode.left, value);
        }
        else if (value > currentNode.value){
            this.removeHelper(currentNode, currentNode.right, value);
        }

        return currentNode.isBalanced ? currentNode : this.balanceSubTree(currentNode);
    }

    remove(value){
        if (!this.root){
            return false;
        }
        this.root = this.removeHelper(null, this.root, value)
        return true;
    }
}

let avlTree = new AVLTree([50,40,60,70])

avlTree.remove(50)

if(avlTree.root){
    console.log(JSON.stringify(traverse(avlTree.root)))
}
else{
    console.log("Empty Tree")
}



