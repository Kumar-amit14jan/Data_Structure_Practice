class MyArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        this.length --;
        delete this.data[this.length];
    }

    //shift => remove the element from starting
    shift(){
        // [1,2,3] ==> [2,3]
        for(let i = 1 ; i< this.length ;i++){
            this.data[i -1 ] = this.data[i];
        }
        delete this.data[this.length -1];
        return this.length;
    }

    // get the element at specific index
    get(index){
        return this.data[index];
    }

    removeByIndex(index){

        for(let i = index+1 ; i< this.length ;i++){
            console.log(index)
            this.data[i -1] = this.data[i];
        }
        delete this.data[this.length -1];
        this.length --;
        return this.length;
    }
}

const array = new MyArray();
array.push(1);
array.push(3);
array.push(2);
array.pop()

console.log(array.data);
// console.log(array.shift())
console.log(array.data)
// console.log(array.get(1));
array.push(13);
array.push(12);
console.log(array.data)
array.removeByIndex(1)
console.log(array.data)
array.removeByIndex(1)
console.log(array.data)
array.removeByIndex(1)
console.log(array.data)