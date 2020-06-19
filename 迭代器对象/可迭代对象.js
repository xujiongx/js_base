// Symbol.iterator可迭代对象,
//next()返回值格式{done:Boolean,value:any}

let range = {
    from: 1,
    to: 5,
    //迭代器方法
    [Symbol.iterator]() {
        return {
            first: this.from,
            last: this.to,
            next() {
                if (this.first <= this.last) {
                    return {
                        done: false,
                        value: this.first++
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

// range[Symbol.iterator]=function(){
//     return{
//         first:this.from,
//         last:this.to,
//         next(){
//             if(this.first<=this.last){
//                 return {done:false,value:this.first++}
//             }else{
//                 return {done:true}
//             }
//         }
//     }
// }

for (let i of range) {
    console.log(i);

}