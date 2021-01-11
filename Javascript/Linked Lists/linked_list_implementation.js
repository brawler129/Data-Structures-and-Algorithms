// Here I have created a Linked List implementation from scratch to study and
// Better understand how linked lists work

class LinkedList {

    constructor(initial_value){
        // Initialize Linked List from initial_value
        this.head = {
             value: initial_value,
             next: null
        }
        this.tail = this.head;
    }

    display(){
        // Function to display the linked list in a 'pretty' manner
        let pretty_linked_list = '';
        let current_node = this.head;
        while(true){
            pretty_linked_list += String(current_node.value);
            if(current_node.next === null){
                break;
            }
            else{
                pretty_linked_list += ' ---> ';
                current_node = current_node.next;
            }
        }
        console.log(pretty_linked_list)
    }
    append(value){
        // Function to add a node to the end of the linked list
        let inserted_node = { value: value, next: null };
        // let current_node = this.head;
        // while(true){
        //     if (current_node.next === null){
        //         current_node.next = inserted_node;

        //         break;
        //     }
        //     current_node = current_node.next
        // }
        this.tail.next = inserted_node
        this.tail = this.tail.next
    }
}

var myLinkedList = new LinkedList(5)
myLinkedList.append(4)
myLinkedList.append(3)
myLinkedList.display()