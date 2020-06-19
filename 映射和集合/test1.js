// 过滤数组中的唯一元素


let arr=["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
 
function unique(arr){
    return  Array.from(new Set(arr))
}

console.log(unique(arr));
 



