class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        this.first = new Node(value);
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
        }
        let temp = this.first;
        this.first = newNode;
        this.first.next = temp;
    }
    pop() {
        if (!this.first) {
            return undefined;
        }
        let temp = this.first;
        this.first = this.first.next;
        temp.next = null;
    }
}

let st = new Stack(2);
st.push(3);
st.push(4);
console.log(st);
st.pop();
console.log("on pop operation:",st);