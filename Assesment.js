function func1(str1,str2){
    return str1.length > str2.length ? "String1 is bigger than string2": str2.length > str1.length? "string2 is bigger than string1": "both are equal";
}
//console.log(func1("pritam", "deepti"));

const palindrom = (str) =>{
   if(str == str.split('').reverse().join('')) {
       return "string is palindrom";
   } else {
       return "string is not palindrom";
   }
}
//console.log(palindrom("madam"));

const checkArr = (arr) => {
    console.log(arr)
    newArray = [];
    for(let i=0; i<arr.length; i++) {
        if(newArray.indexOf(arr[i]) === -1){
             newArray.push(arr[i]);
        }
    }
    return newArray;
}
//console.log(checkArr([10,20,10,50,40,60,70,10,20,30]))

const score = (str) => {
    let total = 0;
    arr = ["a","d","f","m","z"];
  
    let newStr = str.split('');
    for(let i=0; i<newStr.length; i++){
       let count = arr.indexOf(newStr[i]) + 1;
        total += count;
    }
    return total;
}
//console.log(score("azd"))

const totalScore = (str1,str2) => {
    let leftTotal = 0;
    let rightTotal = 0;

    leftArr = ["m", "n", "o", "p"];
    rightArr = ["z", "y", "x", "w"];

    leftArr = leftArr.reverse();
    rightArr = rightArr.reverse();

    newArr1 = str1.split('');
    newArr2 = str2.split('');
  
    for(let i=0; i<newArr1.length; i++){
       let leftCount = leftArr.indexOf(newArr1[i]) + 1;
       leftTotal += leftCount
    }
    
    for(let j=0; j<newArr2.length; j++){
       let rightCount = rightArr.indexOf(newArr2[j]) + 1;
       rightTotal += rightCount
    }

    if(leftTotal > rightTotal) {
        return "left side is winner";
    } else if (rightTotal > leftTotal) {
        return "right side is winner";
    }
        
    return "Tie ";
    
}
//console.log(totalScore("m", "y"))

const tennis = (str) => {
    let leftval = 0;
    let rightVal = 0;

    arr = ['15', '30', '40'];
    str1 = str.split('-');
    leftVar = str1[0];
    rightVar = str1[1];

    leftval = arr.indexOf(leftVar) + 1;
    rightVal = arr.indexOf(rightVar) + 1;

    if(leftVar === 'love'){
        leftval = 0;
    }
     
    if (rightVar === 'all'){
        rightVal = leftval
    }

    if (rightVar === 'love'){
        rightVal = 0;
    }

    if (leftval > rightVal){
        return "left side is winner";
    } else if (rightVal > leftval) {
       return "right side is winner"
    }
    return 'tie';
    
}
console.log(tennis('15-love'))