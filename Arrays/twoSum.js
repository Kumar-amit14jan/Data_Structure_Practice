function pairSum(list , target){
    for(let i = 0 ; i<= list.length - 1 ; i++){
        for(let j = i+1 ; j< list.length ; j++){
            if(list[i] + list[j] == target){
                return [i , j]
            }
        }
    }
    return []
}

let pair = pairSum([2,7,11,15] , 9);
console.log(pair)