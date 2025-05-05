// "use strict";
console.log("06-stringMethod.js");

//chuỗi trong js đc đặt trong dấu ' | " | `
let str = `ahihi`;

//1.length // là prop của string cung cấp độ dài

console.log(str.length);
//2.indexOf(str): method nhận vào chuỗi và trả ra vị trí tìm đc
//  chuỗi đó
console.log(str.indexOf("h"));//1
console.log(str.indexOf("ih"));//2
console.log(str.indexOf("s"));//-1

//tách chuỗi 
//1. slice(start, end): chiết xuất chuỗi con trong chuỗi cha 
//                          tính từ start đến end - 1
let x = "Xin chào PiedTeam, mình là Điệp"
let result = x.slice(9, 17);//PiedTeam
//phải hứng kq bằng 1 biến 
//slice có chiết xuất ra 1 chuỗi riêng chứ x ko hề thay đổi
console.log(result);
//string là immutable: object có method ko làm
//thay đổi object đó mà return về object kết quả

//cắt ngược
result = x.slice(-22, -14);//PiedTeam
console.log(result);
//cắt bằng 1 parameter
result = x.slice(9);//PiedTeam , mình là Điệp
console.log(result);
//cắt bằng 12 parameter nhưng ngược
//cắt bằng 1 parameter
result = x.slice(-12);// mình là Điệp
console.log(result);


//3. substring(start, end):chiết xuất chuỗi con trong chuỗi cha 
//                          tính từ start đến end - 1
//          giống slice nhưng ko có ngược

//4.substr(start, length): chiết xuất chuỗi con từ start có độ dài là length
result = x.substr(9,8);// PiedTeam
console.log(result); 

//II. các method phổ biến
//1. replace(thay thế chuỗi)
let str1 = "PiedTeam có nhìu bạn rất nhìu tiền";
str1 = str1.replace("nhìu", "ít");
console.log(str1);//PiedTeam có ít bạn rất nhìu tiền

//2. replaceAll()
str1 = "PiedTeam có nhìu bạn rất nhìu tiền";
str1 = str1.replaceAll("nhìu", "ít");
console.log(str1);//PiedTeam có ít bạn rất ít tiền

//
str1 = "PiedTeam có nhìu bạn rất nhìu tiền";
str1 = str1.replace(/nhìu/g, "ít");
console.log(str1);//PiedTeam có ít bạn rất ít tiền

// chuyển đổi hoa thường .toUpperCase() .toLowerCase()

//3.concat() nối chuỗi
str1 = "xin chào";
str2 = "piedteam";
str3 = str1.concat(" ", "mừng bạn đến với", " ", str2);
str3 = str1 + " " + "mừng bạn đến với" + " " + str2;
str3 = `${str1} mừng bạn đến với ${str2}`
console.log(str3);//xin chào mừng bạn đến với piedteam

//4. trim(): xóa khoảng cách thừa ở 2 đầu
str1 = "    xin     chào    các     bạn     ";
str1 = str1.trim();
console.log(str1);//"xin     chào    các     bạn"

//cách 1: replace
str1 = "    xin     chào    các     bạn     ";
str1 = str1.replace(/\s+/g, " ").trim();
console.log(str1);//xin chào các bạn
//cách 2: pro player có kinh nghiệm xử lí mảng và chuỗi
//.split
//.filter
//.join
str1 = "    xin     chào    các     bạn     ";
str1 = str1.split(" ")
            .filter((item) => item != "")//khác rỗng thì true, rỗng thì bỏ
            .join("-");
console.log(str1);

//5. so sánh chuỗi == | ===

//6. charAt(index): trả ra kí tự ở vị trí index trong chuỗi
x = "Lê Mười Điệp"
console.log(x.charAt(3));//M
console.log(x[3]);
x[3] = "L";
console.log(x);
//"lÊ mườI đIệp" => "Lê Mười Điệp"
/*
Trong JavaScript, các chuỗi (strings) là immutable, 
nghĩa là một khi chuỗi đã được tạo ra, nó không thể bị thay đổi.
 Mọi thao tác như thay đổi ký tự, nối chuỗi, cắt chuỗi 
 đều tạo ra một chuỗi mới mà không thay đổi chuỗi ban đầu
*/ 

