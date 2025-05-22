// creating of node
class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}
//creating linked list
class linkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
    }
    push(value){
        const node = new Node(value);
        // this will add the heade node with the newly created node
        var temp = this.head;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = node;
        this.tail = temp.next;
        return this.head;

    }
    getAllNodes(){
        let temp = this.head;
        while(temp != null){
            console.log("current node:",temp.data);
            temp = temp.next;
        }
    }
    // REMOVE ELEMENT
    // 1 2,3,4
    pop(){
        let temp = this.head;
        while(temp.next.next != null){
            temp = temp.next;
        }
        this.tail = temp;
        this.tail.next = null;
    }
    // unshift means add the element at the starting of the linked list
    unshift(value){
        const node = new Node(value);
        let temp = this.head;
        this.head = node;
        node.next = temp;
    }
    // shift means remove the first element from the linked list
    shift(){
        if(!this.head){
            return;
        }
        const temp = this.head;
        this.head = temp.next;
    }
    getLastElement(){
        let temp  = this.head;
        while(temp.next != null){
            temp = temp.next;
        }
        return temp
    }
    // get element by index
    get(index){
        let temp = this.head;
        let count = 0;
        while(temp!=null){
            if(count == index){
                return temp;
            }
            count++;
            temp = temp.next;
        }
        return;
    }
    // set the element
    set(index , value){
        let temp = this.head;
        let count = 0;
        while(temp != null){
            if(count == index){
                temp.data = value;
            }
            count++;
            temp = temp.next;
        }
        return this.head;
    }

    insert(index , value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
            return this.head;
        }
        let temp = this.head;
        let count = 0;
        // 1 2 3
        while(temp != null){
            if(count == index -1){
                let temp1 = temp.next;
                temp.next = node;
                node.next = temp1;
            }
            temp = temp.next;
            count++;
        }

    }

    // size of the linked list
    size(){
        let temp = this.head;
        let count = 0;
        while(temp != null){
            count ++;
            temp = temp.next;
        }
        return count;
    }
    clear(){
        this.head = null;
        this.tail = null;
    }
}

const LinkedList = new linkedList(2);
LinkedList.push(3);
LinkedList.push(4);
LinkedList.push(5);
LinkedList.getAllNodes();
LinkedList.pop();
console.log("node after deleting the nodes:")
LinkedList.getAllNodes()
LinkedList.unshift(22);
console.log("adding the elements at the starting of the linked list");
LinkedList.getAllNodes();
LinkedList.shift();
console.log("remove the element from the frrst node of the linked list:");
LinkedList.getAllNodes();
console.log(LinkedList);
console.log("get the last element:",LinkedList.getLastElement());
console.log("get element by index:", LinkedList.get(1));
console.log("setting the value by index");
LinkedList.set(1 , 33);
console.log(LinkedList);
LinkedList.getAllNodes();


console.log("insert the element at the particular index...");
LinkedList.insert(1, 34);
LinkedList.getAllNodes();
console.log("size of the linked list:", LinkedList.size());
LinkedList.clear();
console.log("size of the linked list:", LinkedList.size());