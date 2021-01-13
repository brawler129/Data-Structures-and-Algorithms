// Here I have created a Linked List implementation from scratch to study and
// Better understand how linked lists work


class Node {
    // Node class 
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {

    constructor(initial_value){
        // Initialize Linked List from initial_value
        this.head = new Node(initial_value);
        this.tail = this.head;
        this.length = 1;
        this.display();
    }

    display(){
        // Function to display the linked list in a 'pretty' manner
        let pretty_linked_list = '';
        let current_node = this.head;
        while(current_node !== null){
            pretty_linked_list += String(current_node.value);
            if(current_node.next !== null){
                pretty_linked_list += ' ---> ';
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
        this.tail = this.tail.next;
        this.length++;
        this.display()
        return this;
    }

    prepend(value){
        // Function to add to the front of the node
        let inserted_node = new Node(value);
        inserted_node.next = this.head;
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
        let current_node = this.traverseToIndex(index - 1);
        newNode.next = current_node.next;
        current_node.next = newNode;
        this.length++;
        this.display()
        return this;
    }

    remove(index){
        // Remove node at index
        if(index >= this.length){
            console.log("Invalid index");
            return;
        }
        let current_node = this.traverseToIndex(index - 1);
        let node_to_be_removed = current_node.next;
        current_node.next = node_to_be_removed.next;
        if (current_node.next === null){
            this.tail = current_node;
        }
        this.length--;
        this.display();
        return this;
    }

    reverse(){
        // Reverse the linked list
        let first = this.head;
        this.tail = this.head;
        let second = this.head.next;
        first.next = null;
        let temp = undefined;
        while(second){
            temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head = first;
        this.display();
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
myLinkedList.prepend(3)
myLinkedList.reverse()
myLinkedList.reverse()



