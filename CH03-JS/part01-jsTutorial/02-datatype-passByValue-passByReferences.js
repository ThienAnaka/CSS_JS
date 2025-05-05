//
console.log("Bài 2: Kiểu dữ liệu - truyền tham trị - truyền tham chiếu");
//I-1. Primitive datatype: kiểu nguyên thủy
/*
    number: 1, 12, 14.6
    string: '1000', 'xin chào'
    boolean: true(1) | false(0) -0 =>false | -1 => true
    tất cả các số đều là true hết trừ 0 và -0
    tất cả các số đều là số nhìu trừ số 1
    null: giá trị rỗng - bik kiểu dữ liệu nhma ko bik bao nhiu
    **null ko xuất hiện tự nhiên, 
        là 1 dạng object/cung cấp object  nhưng ko đưa gì hết
                         thì tự hỉu là 1 "giá trị"/kiểu của object

    undefined: giá trị rỗng - ko bik 
    symbol(ES6): bảo mật kém
*/ 

//null và undefined khác nhau như nào
console.log(typeof null);// Object, tuy nhiên nó lại xếp ở Primitive datatype
//null là rỗng, quá nhỏ/ko có gì để phân tách
//null đc xếp vào nguyên thủy, đứng đầu phả hệ mọi kiểu dữ liệu
console.log(typeof undefined);// undefined
console.log(null == undefined); //true
console.log(null === undefined); // false
//== :so sánh giá trị (ép kiểu và unboxing)
//===: so sánh giá trị và KIỂU

//
console.log(2 == "2");//true
console.log(2 === "2");//false

//undefined trong parameter của function
function handle1(a, b) {
    return b;
}

let c = handle1(5);
    console.log(c);
  

//function mà ko return thì nghĩa là "return undefined"
//undefined trong thuộc tính của object
let tan = {name: "Bá Tân", height: 165};
console.log(tan.nguoiYeu);//undefined, có bật 'use strict' thì cũn ko bị bug
tan.money = 1000;
console.log(tan);
//bản chất của object trong js là hoisting cục bộ nên nó cũn
    // có thể hoisting các thuộc tính bên trong object

/*
register
{
    email: "ahihiDoCho@gmail.com"
    password: 123123abc
    confirm_password: 123123abc
    token: ahihi
}

//kiểm tra xem email: "ahihidoCho@gmail.com" có ai dùng chưa
//tạo token và gửi email
*/

//null là bik kiểu dữ liệu nhưng ko bik giá trị
let str = ""; //gọi là chuỗi rỗng vì rỗng có 2 thằng(null và undefined)
str = null; //gọi là rỗng(object)
/*
    về mặt lưu trữ hệ thống ko xài null, chỉ lưu chuỗi rỗng, 0, false
    null và undefined thì sẽ ko có thuộc tính 
    trong mặt lưu trữ ta ko nên lưu null
    tránh việc xử lí vào null làm crash app
*/
//I-2: Object datatype: khác primitive
//plain Object: object phẳng
let student = {name: "Tùng", point: 10};
//             property | entry
//             key: value

console.log(student.name);
console.log(student["name"]);

//Array là cách khai báo nhiều biến cùng tên,cùng lúc
let flowerList = ["Huệ", "Cúc", "Lan", 10];
/*
flowerList = {
    0: "Huệ"
    1: "Cúc"
    2: "Lan"
}
*/
console.log(flowerList[1]);
//Array là object có key, có value

//regular expression: regex là Object
let regex1 = /SE\d{9}/;
console.log(typeof regex1); //Object

//function có typeof là function, gốc gác sâu hơn Object
console.log(typeof handle1); // function
console.log(handle1.prototype);

//
console.log(10 / "d");//NaN: not a number có kiểu là number
//vì NaN là 1 trạng thái của Number
console.log(typeof NaN );// number
console.log(NaN == Number);// false vì 1 tk là trạng thái/1 tk là kiểu
console.log(NaN == NaN);// false vì 2 nó là trạng thái ko so đc
                        // cả hai đều ko có giá trị 

//Tất cả các cách khai báo primitive đều có thể khai báo bằng constructor
//wrapper class: class bao bọc
let str1 = "ahihi";
str1 = new String("ahihi");
console.log(str1);// ahihi do auto-unboxing
console.log(str1 == "ahihi");//true
console.log(str1 === "ahihi");//false, đang so sánh địa chỉ
console.log(str1.valueOf() === "ahihi");//true, tự unboxing lấy giá trị

//dùng wrapper class để ép kiểu
let year = String(1999);
console.log(year);

//Bàn riêng về boolean
console.log(Boolean(1999));// true
console.log(Boolean(0));//false
console.log(Boolean("0"));//true, trong bảng ascii 0 là 48, là số nên true
console.log(Boolean(""));//false, vì rỗng là \0, mà \0 là 0, 0 là false
console.log(Boolean(" "));//true, trong bảng ascii space là 32, số nên true
console.log(Boolean(null)); //false
console.log(Boolean({}));// true vì Object ở đây là địa chỉ
                         // địa chỉ là 1 dãy số nên true
console.log(Boolean([]));//true vì mảng là Object => ở đây là địa chỉ
                         // địa chỉ là 1 dãy số nên true
console.log(Boolean(10 / "d"));// false, vì là trạng thái ko sở hữu giá trị
                               //, phủ định của number, hầu như trạng thái
                               //đều là false
console.log(Boolean(false));//false, vì false là false

//Falsy: đối với JS những gì ko chứa giá trị đều là false
// null, undefined, 0 ,-0, false, NaN

//Truthy: ngược lại với falsy
// chuỗi khác rỗng, số khác 0 và -0, Object đều true

//1.pass by value: truyền tham trị
let a = 1;
let b = a;
b += 2
console.log(a, b);// a = 1, b = 3

//vd2:
let point = 4;
//Hàm sửa điểm
function updatePoint(currentPoint) {// muốn thay đổi thì phải biến thành Object
    currentPoint = 10;
}
//xài hàm
updatePoint(point);
console.log(point);

//2.pass by references: truyền tham chiếu
let boyFriend1 = {name: "hotGirl", size: "B cub"};
let boyFriend2 = boyFriend1;
boyFriend2.size = "H cub";
console.log(boyFriend1);
// OPERATOR Toán tử
//trong js có 10 loại toán tử (có thể nhìu hơn)
/*
1  Assignment            gán = 
2  Comparison            so sánh ==  ===
3  Arithmetic            toán hạng
4  bitwase               bitwase(or, xor, not, and)
5  logical               logic && ||
6  String                chuỗi
7  Conditional(ternary)  ba ngôi
8  Comma                 phẩy(dùng cho mảng)
9  Unary                 một ngôi(phép giao và phép hợp)
10 Relational            Quan hệ(extend..)
*/
//
// Arithmetic Operator toán tử toán hạng
//  + | - | * | **(mũ) | / | % | variable++ | variable-- | ++variable | --variable |
//  không được n++ ++n --n n-- với n là số bất kỳ

// Assignment Operator toán tử gán
//  = | += | -= | *= | **= | /= | %= |
//

// Comparison Operator toán tử so sánh
//  == bằng giá trị là được (không quan tâm kiểu)

console.log(2 == "2");//true
console.log(2 !== "2");//true, có khác về mặt giá trị hoặc kiểu không 
console.log(2 != "2");// false , có khác giá trị ko?

//toán tử 3 ngôi
let diep = "đẹp trai";
let isDepTrai = diep === "đẹp trai";// === so sánh khắc khe, về mặt địa chỉ
console.log(isDepTrai);//true, cơ chế vùng pool

let diep1 = "đẹp trai";
let isDepTrai1 = diep == "đẹp trai";// == so sánh giá trị
console.log(isDepTrai1);//true


//
console.log("b" + "a" + +"a" + "a");// baNaNa

//logical
//&& và || dấu !
//&& tìm false
//|| tìm true

console.log(0 && 1);//0 (0 là false)
console.log(0 || 1 || 4);//1 (true)
console.log(0);// 0
console.log(!0);// true, đặc trưng của dấu ! là ép 
                // về boolean về thành true|false
console.log("");// ko có gì
console.log(!"");//true, chuỗi rỗng trong boolean thành false
console.log(!"" && 0 && 1);//0



let res = {
    data: [1,2,3,4],
};
let res1 = {
    err: new Error("ngu"),
};

//let res; //?
//**Hoisting có thể chấm những thuộc tính ko có gì 
if (res.err != undefined) {
    console.log("Ko có dữ liệu");  
}

//
!res.data && console.log("Ko có dữ liệu");
