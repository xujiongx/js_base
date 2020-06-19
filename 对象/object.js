function Person(name){
    if(!new.target){
        return new Person(name)
    }
    this.name=name;
    this.isAdmin=false;
}

let john=Person('john')
console.log(john.name)