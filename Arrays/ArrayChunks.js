function arrayChunks(arr , n){
    let newArray =[];
    for(let i = 0 ; i< arr.length ;){
        newArray.push(arr.slice(i , i+n));
        i=i+n;
    }
    return newArray;
}

console.log(arrayChunks([1,2,3,4,5,6,7,8,9] , 2))