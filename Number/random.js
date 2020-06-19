/*
*求任意两个数字之间的随机数
*/

function random(a,b){
   
    return Math.min(a,b)+Math.random()*(Math.abs(b-a))
}

console.log(random(10,5));
console.log( "\u{1F60D}" );