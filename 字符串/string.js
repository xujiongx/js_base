// 字符串首字母大写

function ucFirst(str){
    return str[0].toUpperCase()+str.slice(1)
}

console.log(ucFirst("john"));
 
function checkSpam(str){
  return str.includes('viagra')||str.includes('xxx')
}

console.log(checkSpam('viaga now'),checkSpam('xxx now'));

function truncate(str,maxlength){
    return str.length>maxlength?str.slice(0,maxlength-1)+'...':str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20),truncate("Hi everyone!", 20));
 

function extractCurrencyValue(str){
    let newStr=Number(str)
    return '$'+newStr;
}
console.log(extractCurrencyValue('120') );
 