//04-function-number-method.js
"use strict";
console.log("Bài 04: Hàm và các method của Number");
//hàm trong js đc chia làm 2 loại chính 
//Function declaration FD | Function Expression FE
//1.Function declaration(khai báo hàm)
handle1();
function handle1() {
    console.log("tui là hàm đc tạo từ function declaration");
}

//2. Function Expression(biểu thức hàm)
//handle2(); // var : lỗi handle2 not function, let: can't access before init
var handle2 = function() {
    console.log("tui là hàm đc tạo từ function Expression");
}
handle2();

//3. IIFE: immediately invokable function expresion

function handle3(){
    let a = 10;
    let b = 20;
    console.log(a + b);
}
handle3();
//thay vì viết như trên thì có thể viết như bên dưới
// ***nên tự viết ; ở đầu nếu ko thì sẽ tự vỡ cấu trúc,1 hàm chạy xong sẽ chạy típ 1 hàm khác liên tục
;(function handle3(){
    let a = 10;
    let b = 20;
    console.log(a + b);
})();//đây là cách viết dùng liền, ko có tính tái sử dụng


//IIFE + async await
// (async function name(params) {
//     let data = await getDataFromServer();
//     showData(data);
// })();

//CallBack: gọi lại | hàm nhận 1 hàm làm đối số (argument)
//Function1(a, function2) gọi là callback | function2 gọi là callbackFunction
//hàm nhận vào 1 hàm là callback | hàm bị nhận là callbackFunction
//          Đây là 2 cơ chế riêng biệt


let handle4 = function(){
    console.log("Ahihi");
    
};

//callback
//3 cách viết
/*
setTimeout(handle4, 3000);//đợi 1 khoảng thời gian r gọi callbackFunc để thực hiện 

setTimeout(function(){
    console.log("Ahihi");
}, 3000);

//Arrow Function
setTimeout(() => {
    console.log("AHIHI"); 
}, 3000);
*/

//Arrow Function(là cách viết tắt của FE(Function Expression))
//FD|FE|FA có sự khác nhau nhất định về mặt kết quả

//FD
function handle5() {
    console.log(this);
    
};
//FE
let handle6 = function () {
    console.log(this);
};
//FA : rất ghét 'this', sút this ra bên ngoài tới window, nhận window là người gọi
let handle7 = () => {
    console.log(this);
};
//this là người đang gọi, ai gọi thì this là người đó 
//test
//         useStrict        normal
handle5();//undefined       window
handle6();//undefined       window
handle7();//window          window

//trong JS, this đại diện cho object đang gọi nó
//FD và FE sẽ giam this(tốt) | nếu có cụ thể object gọi thì giá trị của this sẽ là object đó
//  còn nếu ko ai gọi thì this là undefined
//  (normal mode thì ko ai gọi nghĩa là window gọi)
//FA thì luôn sút this ra ngoài global(window)


//VD2:
let person1 = {
    //prop
    fullname: "Điệp đẹp trai",
    //method: function trong object - class
    getNameByFd(){
        console.log(this.fullname);//this lúc này là undefined
    },
    getNameByFe: function(){
        console.log(this.fullname);//this lúc này là undefined
    },
    getNameByFa: () => {
        console.log(this.fullname);//this lúc này là undefined
    },
};
//this 
//                      use strict
person1.getNameByFd();//this là person1 => person1.fullname
person1.getNameByFe();//this là person1 => person1.fullname
person1.getNameByFa();//this về window => window.fullname => undefined

/*
lời khuyên:
    FD nên dùng làm method trong object, xài đâu cũn đc, ko có bug
    FE dùng cho method|function bth và method|function có this
    FA cho function ko có this(***KO NÊN XÀI***)
*/


//phân biệt parameter(tham số) và argument(đối số)
function handle8(a, b = 10){
    console.log(a + b);
    
}

handle8(5, 3);
handle8(5);
//5, 3 đc gọi là đối số argument
//a, b đc gọi là tham số parameter
//b = 10 là default parameter

//tham số còn lại | tham số nghỉ| tham số đợi| rest parameter(ko phải spread)
// ... nằm ở parameter là rest parameter, còn nếu ngoài parameter thì là spread
let handle9 = function (a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
};
handle9(2, 5, 7, 9, 10);// 2, 5, [7, 9, 10](3 số này đc gôm thành mảng là c)

//ứng dụng
//viết hàm nhận vào 1 đống giá trị số, tính tổng của đống số đó
let handle10 = (...numList) =>{
    let result = 0;
    numList.forEach((val) =>{
        result += val;
    })
    return result;  
};
console.log(handle10(1,2,3,4,5,6,7));//28

//number và method của number
//ko ai dùng JS làm app ngân hàng
//vì số trong JS chỉ có dạng number
//số nguyên trong JS chỉ có độ chính xác là 15 số
let x = 999999999999999;//15 số
x = 9999999999999999;// 16 số là sai số
//đối với số thập phân thì độ chính xác là 17
x = 0.2 + 0.1//0.300000000000004
x = (0.2 * 10 + 0.1  * 10) / 10// 0.3
x = Number(0.2 + 0.1).toFixed(1);//0.3(biến nó thành chuỗi)

console.log(x);

console.log(2 + 2);//4

console.log(2 + "2");//2"2" trong js, + sẽ ưu tiên nối chuỗi
console.log(2 + "d");//2"d"
console.log(2 - "d");//NaN
console.log(2 - "2");//0  trong js, - sẽ ưu tiên số
console.log(2 / 0);//Infinity
console.log(-2 / 0);//-Infinity

x = 0o7;// o là octal: hệ 8
x = 0xff;// x là hexa : hệ 16: 255
x = 10
// x = String(x);
// x = x + "";
x = x.toFixed(0);
x = x.toString();
console.log(x);


/*
Tên hàm nên rõ ràng,phải là động từ, mô tả chính xác chức năng hoặc tác vụ mà hàm thực hiện.
đừng đặt quá chung chung 
 Điều này giúp người đọc hiểu được hàm làm gì mà không cần phải xem toàn bộ nội dung hàm

*/
