let obj={
    name:'bob',
    say(){
        console.log(this.name)
    }
}

func=obj.say
func.call(obj)


// Spread 语法 ... 允许将 可迭代对象 args 作为列表传递给 call。
// apply 仅接受 类数组对象 args。
// 因此，这些调用可以相互补充。当我们期望可迭代对象时，使用 call，当我们期望类数组对象时，使用 apply。

// 对于即可迭代又是类数组的对象，例如一个真正的数组，从技术上讲我们使用 call 或 apply 都行，但是 apply 可能会更快，因为大多数 JavaScript 引擎在内部对其进行了优化。