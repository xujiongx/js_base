function arrAdd(){
    let arr=[].concat.apply([],arguments)
    return Array.from(new Set(arr));
}

arr1=[1,2,3]
arr2=[2,3,4,5]

console.log(arrAdd(arr1,arr2));

