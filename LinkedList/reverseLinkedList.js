class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
    }

    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = this.tail.next;
        return this;
    }

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let prev = null;
        let next = null
        // 2 3
        while(temp != null){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
            
        }
        return this
    }
    
}


let list = new LinkedList(2);
list.push(3);

list.push(4);
console.log(list);
list.reverse();
console.log("re",list)