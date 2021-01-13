// Here I have created a Doubly Linked List implementation from scratch to study and
// Better understand how doubly linked lists work


class Node {
    // Node class 
    constructor(value){
        this.value = value
        this.next = null
        this.previous = null
    }
}

class LinkedList {

    constructor(initial_value){
        // Initialize Doubly Linked List from initial_value
        this.head = new Node(initial_value)
        this.tail = this.head;
        this.length = 1;
        this.display()
    }

    display(){
        // Function to display the doubly linked list in a 'pretty' manner
        let pretty_linked_list = '';
        let current_node = this.head;
        while(current_node !== null){
            pretty_linked_list += String(current_node.value);
            if(current_node.next !== null){
                pretty_linked_list += ' <---> ';
            }
            current_node = current_node.next;
        }
        console.log(pretty_linked_list)
    }
    traverseToIndex(index){
        // Return node at index
        let current_node = this.head;
        let i = 0;
        while(i !== index){
            current_node = current_node.next;
            i++;
        }
        return current_node
    }
    append(value){
        // Function to add a node to the end of the linked list
        let inserted_node = new Node(value);
        this.tail.next = inserted_node;
        inserted_node.previous = this.tail;
        this.tail = inserted_node;
        this.length++;
        this.display()
        return this;
    }

    prepend(value){
        // Function to add to the front of the node
        let inserted_node = new Node(value);
        inserted_node.previous = null;
        inserted_node.next = this.head;
        this.head.previous = inserted_node;
        this.head = inserted_node;
        this.length++;
        this.display()
        return this;
    }

    insert(index, value){
        // Insert node with value at given index
        if (index > this.length){
            console.log("Invalid index");
            return
        }
        if (index === 0){
            this.prepend(value);
            return this;
        }
        if (index === this.length){
            this.append(value);
            return this;
        }
        let newNode = new Node(value);
        let one_down_node = this.traverseToIndex(index - 1);
        let one_up_node = one_down_node.next;
        newNode.next = one_up_node;
        if (one_up_node !== null){
            one_up_node.previous = newNode;
        }
        newNode.previous = one_down_node;
        one_down_node.next = newNode;
        this.length++;
        this.display();
        return this;
    }

    remove(index){
        // Remove node at index
        if(index >= this.length){
            console.log("Invalid index");
            return;
        }
        let unwanted_node = this.traverseToIndex(index);
        let one_down_node = unwanted_node.previous;
        let one_up_node = unwanted_node.next;
        if (one_up_node !== null){
            one_up_node.previous = one_down_node;
        }
        else{
            this.tail = one_down_node;
        }
        one_down_node.next = one_up_node;
        this.length--;
        this.display();
        return this;
    }

    
}

var myLinkedList = new LinkedList(5)
myLinkedList.append(4)
myLinkedList.append(3)
myLinkedList.prepend(3)
myLinkedList.insert(1, 9)
myLinkedList.remove(1)
myLinkedList.remove(3)
myLinkedList.append(10)
myLinkedList.remove(3)
myLinkedList.insert(1, 9)
