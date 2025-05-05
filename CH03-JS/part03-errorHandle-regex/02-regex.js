//I - Regex là gì?
//      Regex hay regular expression | pattern | Biểu thức chính quy
//                  mẫu định dạng cho các chuỗi
//      hơi giống like trong SQL
//      Regex là 1 object
//      js thì mình dùng method.test() | thay vì matches() java

let regex1 = /name/;
console.log(regex1.test("Điệp is my name"));//true

//i: ignore case: trong java thì là ? ở đầu
regex1 = /name/i;
console.log(regex1.test("Điệp is my name"));//true

//1 vài method xài cùng regex
console.log(regex1.exec("Điệp is my name"));//['name', index: 11, input: 'Điệp is my name', groups: undefined]
console.log("Điệp is my name".match(regex1));//['name', index: 11, input: 'Điệp is my name', groups: undefined]
console.log("Điệp is my name".search(regex1));//11
//replace

//II - Regex metcharacter symbols: phần này nên test ở trang regexr.com
//bắt đầu chuỗi ^asda
//kết thúc chuỗi asda$
//trong chuỗi chỉ có ^asda$

//. : 1 kí tự bất kì (ngoại trừ enter)

//* lặp lại từ 0 -> n
//+ lặp lại từ 1 -> n
//? lặp lại từ 0 -> 1
//{start, end}: từ start đến end lần

//[] || \ để thoát chuỗi escape character

//III- Regex Character sets và Quantifiers
// character set [...]: lấy kí tự trong mảng
// except character set [^...]: ko lấy kí tự trong mảng
// set digit [0-9]: lấy số
// set alpha [A-Z] [a-z] [a-zA-Z]: lấy chữ các thường hoặc hoa
//gom nhóm () và hoặc | :vd:(Lê|Hồ)điệp

//Short hand
//muốn chữ và số \w     \W
//muốn số        \d     \D
//muốn space     \s     \S
//a(?=n) tìm a mà kế bên là n
//a(?!n) tìm a mà kế bên ko là n


//ký tự biên \b: tìm chính xác từ, ko dư, ko thíu 
//ký tự biên là gì, và nằm ở đâu trong câu
// ký tự biên nằm cấu trúc
//      ký tự từ + ký tự biên + không phải ký tự từ
//      không phải ký tự từ + ký tự biên + không phải ký tự từ

//vd
/*
    \bword\b

new word
words in my letter
sword in my hand
the 'word' is shiet
*/

//tìm từ word và chỉ từ word

//bootstrap form
//HOF: callfunction currying closure
//method xử lí mảng

