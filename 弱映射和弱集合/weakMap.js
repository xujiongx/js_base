// WeakMap 在这方面有着根本上的不同。它不会阻止垃圾回收机制对作为键的对象（key object）的回收。
// WeakMap 和 Map 的第一个不同点就是，WeakMap 的键必须是对象，不能是原始值.
// WeakMap 不支持迭代以及 keys()，values() 和 entries() 方法。所以没有办法获取 WeakMap 的所有键或值。

// WeakMap 只有以下的方法：

// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)


// WeakMap 的主要应用场景是 额外数据的存储。

// 假如我们正在处理一个“属于”另一个代码的一个对象，也可能是第三方库，并想存储一些与之相关的数据，那么这些数据就应该与这个对象共存亡 — 这时候 WeakMap 正是我们所需要的利器。

// 另外一个普遍的例子是缓存：当一个函数的结果需要被记住（“缓存”），这样在后续的对同一个对象的调用时，就可以重用这个被缓存的结果。