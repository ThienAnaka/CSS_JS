//04-nativePrototype.js

//- thuộc tính prototype của constructor function đc sử dụng rộng rãi trong JS
//- mọi constructor function đều sẽ có prototype
//- tổng kết khái niệm như sau:
//-- [[prototype]] là 1 thuộc tính ẩn của object, nó là đại diện
//  cho prototype thực thể(hiện thực hóa, từ các này ra cái kia)
//- __proto__ là get và set (accessor property) của [[prototype]]

let obj = {}; //1 đối tượng ko có thuộc tính 
// obj = new Object();
console.log(obj.toString());//[object Object] (hàm)
console.log(obj.__proto__ == Object);//false vì Object là constructor function
console.log(obj.__proto__ == Object.prototype);//class Object(phải là class Object)
console.log(Object.prototype.__proto__);//null
console.log(obj.__proto__.__proto__);//null

//mảng 
let mang1 = [1,2,3];
console.log(mang1.__proto__ == Array.prototype);//class Array
console.log(Array.prototype.__proto__ == Object.prototype);// class object
console.log(mang1.__proto__.__proto__.__proto__);//null
console.log(mang1.__proto__.__proto__ == Array.prototype.__proto__);//true

//mangr1.toString() thì nó sẽ xài toString của Object hay của Array?
console.log(mang1.toString());//1,2,3

//
let a = 5;
console.log(a.__proto__ == Number.prototype);//true

