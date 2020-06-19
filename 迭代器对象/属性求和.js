let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(s) {
    let sum = 0
    for (let value of Object.values(s)) {
        sum += value
    }
    return sum
}


console.log(sumSalaries(salaries));


// 转换对象
// 对象缺少数组存在的许多方法，例如 map 和 filter 等。

// 如果我们想应用它们，那么我们可以在 Object.entries 之后使用 Object.fromEntries：

// 使用 Object.entries(obj) 从 obj 获取由键/值对组成的数组。
// 对该数组使用数组方法，例如 map。
// 对结果数组使用 Object.fromEntries(array) 方法，将结果转回成对象。
// 例如，我们有一个带有价格的对象，并想将它们加倍：



// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   // 转换为数组，之后使用 map 方法，然后通过 fromEntries 再转回到对象
//   Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// alert(doublePrices.meat); // 8