// new Set(iterable) —— 创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中。
// set.add(value) —— 添加一个值，返回 set 本身
// set.delete(value) —— 删除值，如果 value 在这个方法调用的时候存在则返回 true ，否则返回 false。
// set.has(value) —— 如果 value 在 set 中，返回 true，否则返回 false。
// set.clear() —— 清空 set。
// set.size —— 返回元素个数。

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits，一些访客来访好几次
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set 只保留不重复的值
// console.log( set.size ); // 3

// for (let user of set) {
//  console.log(user.name); // John（然后 Pete 和 Mary）
// }


// 我们可以使用 for..of 或 forEach 来遍历 Set：
// let set = new Set(["oranges", "apples", "bananas","apples"]);

// // for (let value of set) console.log(value);

// // 与 forEach 相同：
// set.forEach((value, valueAgain, set) => {
//   console.log(set);
// });