// 由 spy(f) 返回的包装器应存储所有参数，然后使用 f.apply 转发调用。
function spy(func) {
    function wrapper(...args) {
        console.log(args)
        wrapper.calls.push(args)
        return func.apply(this.args)
    }
    wrapper.calls = []
    return wrapper
}

function work(a, b) {
    return a + b
}

work = spy(work)

work(1, 2)
work(3, 6)

for (let args of work.calls) {
    console.log(args.join())
}