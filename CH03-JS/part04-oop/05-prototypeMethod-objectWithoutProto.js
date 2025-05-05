//05-prototypeMethod-objectWithoutProto.js

//các phương thức liên quan đến prototype và điều gì xảy ra 
//nếu object chúng ta ko có [[Prototype]]

//chúng ta đang code ở năm 2024, _proto_ là gì
// xài như nào cũng biết
//nhưng phải xem như __proto__ đã bị loại, giờ tụi mik phải dùng những method
//thay thế cho __proto__

//Object.getPrototypeOf(obj)
//Object.setPrototypeOf(obj, newProto)
//Object.create(proto, {descriptor}?)
//      tạo ra {} có [[prototype]] là proto
//      và có thuộc tính như bộ mô tả

//prototypal inheritance: kế thừa nguyên mẫu
let animal = {
    eat: true,
    //[[prototype]]: Object.prototype => class Object
};
console.log(Object.getPrototypeOf(animal) == Object.prototype);//true

//cách 1
// let rabbitYellow = {
//     jump: true,
// };
// rabbitYellow.__proto__= animal;

//cách 2
// Object.setPrototypeOf(rabbitYellow, animal);

//cách 3
let rabbitYellow = Object.create(animal);
// có rabbitYellow là {} có [[prototype]] là animal
rabbitYellow.jump = true;
console.log(rabbitYellow);

//cách 4
rabbitYellow = Object.create(animal, {
    jump: {value: true, writable: false, enumerable: false, configurable: true},
});
//rabbitYellow là {} có [[prototype]] là animal
//và thuộc tính jump với bộ mô tả
console.log(rabbitYellow);

//học cách sao chép 
//làm sao để clone đc rabbitYellow
//C1: spread: ... toán tử phân rã destructuring 
// sao chép prop bth, ko sao chép đc bộ cờ, ko sao chép [[prototype]]
let objClone = {...rabbitYellow};
console.log(objClone);

//C2: Object.definedProperties
objClone = Object.defineProperties({},
    Object.getOwnPropertyDescriptors(rabbitYellow),
);
console.log(objClone);
//sao chép toàn bộ bộ cờ nhưng lại ko clone đc [[prototype]]

//C3: Object.create(proto, {descriptor})
objClone = Object.create(
    Object.getPrototypeOf(rabbitYellow),
    Object.getOwnPropertyDescriptors(rabbitYellow),
);
console.log(objClone);

//II - Very plain object _ object siêu phẳng | Base Object
//[[Prototype]]: có thể là Object, class, null, nhưng ko đc là String
let obj = {};// tạo ra obj rỗng
obj.__proto__ = "ahihi";
console.log(obj);

//Object siêu phẳng
obj = Object.create(null);//tạo ra {} có [[prototype]] là null
//ko còn getter và setter( accessor property)
obj.__proto__ = animal;
console.log(obj);

