//03-F-prototype.js
//trong js, người ta thik dùng function hơn class
//bên java nếu muốn tạo 1 object (bức tường)
//              thì mik cần tạo class(khuôn) => constructor(phễu)
//bên js: ta ko cần class, ta chỉ cần 1 cái hàm là đúc được
//tức là function dùng để tạo object(ko cần dùng class gì cả)

//muốn tạo ra 1 chiếc xe
function Car(name, price){
    this.name = name;
    this.price = price;
}

// class Car {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// };

let audi = new Car("audi", "2 tỷ");
console.log(audi);
/*
audi{
    name: "audi",
    price: "2 tỷ",
    [[prototype]]: prototype của function Car => class Car{
                                        constructor{
                                            prototype: class Car{...}
                                        }
                                    }
}
*/
//vd khác
let factory = {
    date: 2023,
};

Car.prototype = factory;

let rollRoyce = new Car("RR", "1,2 tỷ");
/*
rollRoyce{
    name: "RR",
    price: "1,2 tỷ",
    [[prototype]]: prototype của function Car => factory
}
*/
console.log(rollRoyce);
//=> JS ko đảm bảo constructor nếu như ta chủ động thay đổi
//  prototype của constructor

//ôn lại bài trên
//F.prototype mặc định là thuộc tính của constructor function
//mỗi constructor function đều sẽ có prototype
//prototype mặc định là object chứa constructor
//               trỏ ngược lại constructor function đó

function Animal(name){
    this.name = name;
    //prototype : class Animal
    //              constructor(name){
    //                  this.name = name
    //                  prototype : class Animal{...}
    //              }
};

console.log(Animal.prototype);// class Animal
console.log(Animal.prototype.constructor == Animal);// true
let dog = new Animal("chí pủ");
console.log(dog.__proto__);//class Animal
console.log(dog.__proto__ == Animal.prototype);//true
console.log(dog.constructor);//f Animal

let newPet = new dog.constructor("Quá đã");
console.log(newPet);

