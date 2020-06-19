//缓存包装器

// 装饰者模式，一个特殊的函数，它接受另一个函数并改变它的行为。
// 通过new Map()储存，has()判断有无，get()set()存取
function slow(x){
    return x*x
}

function cachingDecorator(func){
    let cache=new Map()

    return function(x){
        if(cache.has(x)){
            return cache.get(x)
        }else{
            let result=func(x)
            cache.set(x,result)
            return result
        }
    }
}

slow=cachingDecorator(slow)

console.log(slow(1))
console.log(slow(1))



