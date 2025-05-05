 "use strict";
// 01-variable-hoisting-scope.js
//comment: ghi chú
console.log("bài 1: variable - hoisting - scope");//in 
/*JS chạy trên nền tảng web browser
    có khả năng thao tác trên be, fe, web
    Tên đầy đủ là ECMAScript
    Java và C thuần xử lí database
*/

//cách khai báo biến: 3 cách
//C1: var: xuất hiện từ phiên bản ES đầu tiên 
/*var có thể chứa bất cứ kiểu dữ liệu nào: number, String, number[], v.v..
    tùy thuộc vào giá trị người dùng đưa cho JS, JS sẽ định nghĩa kiểu dữ liệu đó
*/
var name1= " điệp đẹp trai";
console.log(name1);//-> điệp đẹp trai
name1= " điệp 10 điểm";// re-assigning: gán lại giá trị
console.log(name1);//-> điệp 10 điểm

//Nếu khai báo mà ko gán giá trị thì sao?
var age;
console.log(age);//-> undefined
age = 10;
console.log(age);//10
console.log(typeof age); //number

//Qui tắc đặt tên biến
//Ko bắt đầu bằng số
//**tên biến bth: camelCase
//**tên thuộc tính: underscore
//**tên class: Pascalcase(UpperCammelCase)
//nguyên tắc camelCase, underscore, Pascalcase(UpperCammelCase)
/* đc phép dùng _(private) và dấu $(protected) ở đầu tên vì JS đi theo hướng lập trình hàm
    JS ko theo thuần túy theo OOP dù nó vẫn có kế thừa, Object,...
    người ta qui ước với nhau như vậy chứ nó ko có hiệu lực
     vì bản chất JS chỉ có 1 access modifier là public
*/

// Hoisting với var(Hoisting: móc ngược lên)
//Hoisting là tính năng ko phải bug
//chỉ dùng var mới có hoisting
/*có 2 chế độ là normal-mode, use strict
    + Hoisting ko phải bug dù có để chế độ nào thì 
        cũn ko hiện bug
*/
console.log(msg);// undifined
var msg = "Hello";
console.log(msg);// Hello

/*Tùy vào chế độ code mà có 2 trường hợp:
    +Chỉ khi để chế độ normal-mode(cẩu thả) thì dòng code dưới sẽ chạy đc, 
    máy sẽ châm chước chạy đc
    +còn chế độ use-strict thì ko bao h đc cho phép */
// message = "Thông báo";
// console.log(message);

//let(ES6 2015) | const: hằng số 
//let và const thì giống var nhưng mà ko có hoisting
/* let ko cung cấp khả năng Hoisting
    console.log(msg1);
    let msg1 = "Hello";
    console.log(msg1);
*/
//const: hằng số: định nghĩa ko thể thay thế đc
/*VD:
    const num = 10;
    num = 10;
    const sẽ định nghĩa là 10 chứ ko phải number
 */
const num = 1;
console.log(num);


//const với object
const profile = {
    name: "Toàn",
    height: 160,
}
profile.name = "Toàn cao";
console.log(profile);

/*hằng số chỉ lưu địa chỉ chứ ko phải giá trị, 
    đổi giá trị thì ko ảnh hưởng gì tới địa chỉ*/
//mảng là Array --> object --> là con trỏ

// profile = {
//     name: "Toàn",
//     height: 160,
// } --> lỗi
/* do profile đang lưu 1 địa chỉ, nếu tạo 1 object mới thì sẽ có địa chỉ mới
    nên JS ko cho phép */

//const với array
const array1 = [1,2,3,4,5];
array1.push(6);
// array1 = [1,2,3,4,5,6];--> lỗi

//scope:ám chỉ khu vực mà mik thấy đc: trong js có 3 loại scope
//global scope: toàn cục - khai báo ở 1 nơi mà ở đâu cũn thấy đc
//Function scope: trong hàm - chứa giá trị chỉ trong hàm mới thấy đc
//block scope(local scope): cục bộ - giống với Function scope

if (true) {
    var son = "Toàn"; //let là gãy
    //var đc xem là toàn cục, ở đâu cũn bik
}
console.log(son);

//let | const ko hoisting | var có hoisting (use strict)
//      là blockscope     |  var là global scope



