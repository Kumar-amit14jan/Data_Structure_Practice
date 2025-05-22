function sentenceCapital(str){
    let newString = str[0].toUpperCase();
    let tempString='';
    for(let i = 1 ; i< str.length ; i++){
        tempString+=str[i]
        if(str[i] === ' '){
            newString+=tempString;
            tempString=''
        }
        if(str[i -1] === ' '){
            tempString=tempString.toUpperCase();
        }
    }
    return newString + tempString;
}

console.log(sentenceCapital("hello world amit kumar"))