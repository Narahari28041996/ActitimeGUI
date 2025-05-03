console.log(this);

function f1(){
    console.log(this);
}
f1()

let person={
    name:"Narahari",
    age:29,
    address:function(){
        console.log(this);
    }
}
person.address()

let person1={
    name:"Narahari",
    age:29,
    address:function(){
        function f1(){
            console.log(this);
        }
        return f1
    }
}
person1.f1()



