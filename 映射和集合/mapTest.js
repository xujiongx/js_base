// new Map() —— 创建 map。
// map.set(key, value) —— 根据键存储值。
// map.get(key) —— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。
// map.has(key) —— 如果 key 存在则返回 true，否则返回 false。
// map.delete(key) —— 删除指定键的值。
// map.clear() —— 清空 map。
// map.size —— 返回当前元素个数。


// let mapT=new Map()
// mapT.set('1',"Jone")
// mapT.set(1,"Tome")
// Bob={name:"heizi"}
// mapT.set(Bob,"Tome's brother")


// console.log(mapT.get("1"),mapT.get(Bob),mapT.size);

// map.keys() —— 遍历并返回所有的键（returns an iterable for keys），
// map.values() —— 遍历并返回所有的值（returns an iterable for values），
// map.entries() —— 遍历并返回所有的实体（returns an iterable for entries）[key, value]，for..of 在默认情况下使用的就是这个。

// for(let mapList of mapT.keys()){
//     console.log(mapList);
// }
// for(let mapList of mapT.values()){
//     console.log(mapList);
// }
// for(let mapList of mapT.entries()){
//     console.log(mapList);
// }

// mapT.forEach((value,key,map)=>{
//     console.log(value,key);
//     // console.log(map);
// })


// Object.entries：从对象创建 Map

// obj={
//     name:'Bob',
//     sex:'man',
//     age:18
// }
// let objMap=new Map(Object.entries(obj))
// console.log(objMap.get("name"));

// Object.fromEntries：从 Map 创建对象

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
console.log(prices);
