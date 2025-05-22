// node for the doubly linked list
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// create the class for the doubly linked list
class DoublyLinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;

    }

    // create a push method
    push(value){
        let node = new Node(value);
        let temp = this.tail;
        while(temp.next != null){
            temp = temp.next;
        }
        let temp2 = temp;
        temp.next = node;
        node.prev = temp2;
        this.tail = node;
        // 1 2 3 4
    }

    getAllNodes(){
        let temp = this.head;
        while(temp !=null){
            console.log("current node:", temp.value);
            temp = temp.next;
        }

    }
// 1 2 3
    pop(){
        if(!this.head){
            return;
        }
        let temp = this.tail.prev;
        temp.next = null;
        this.tail = temp;
    }
    // adding element in sthe starting
    //unshift
    unshift(value){
        let node = new Node(value);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        return this.head;
    }
    //removeing from the starting shift
    shift(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        this.head.prev = null;
    }
}

let list = new DoublyLinkedList(2);
console.log(list);
list.push(3);
list.push(4);
console.log(list);
list.getAllNodes();
// list.pop();
console.log("implementation of pop")
list.getAllNodes();
console.log("adding the element in the starting");
list.unshift(31);
list.getAllNodes();
list.shift();
console.log("removeing the elements from the starting");
list.getAllNodes();