"use strict";
//05-objectMethod-this-function-hof-bind.js
console.log("05-objectMethod-this-function-hof-bind.js");
//1.object: đối tượng 
//      tất cả những gì sờ đc, đếm đc thì là đối tượng
//      các đối tượng(object) có thể đc miêu tả bằng thuộc tính(prop)
//      các đối tượng có hành động đặc trưng method(phương thức)
//      hàm ở ngoài thì gọi là function, hàm ở trong object gọi là method

let promotionBoy1 = {
    nickname: "Lê Mười Điệp", //property
    age: 25, 

    //method
    //fd
    sayHi(){
        console.log("Ahihi quẹo lựa quẹo lựa");  
    },
    //fe
    sayHi1: function () {
        console.log("Ahihi quẹo lựa quẹo lựa");  
    },
    //fa
    sayHi2: () => {
        console.log("Ahihi quẹo lựa quẹo lựa");  
    },
};

//cách tạo method bằng FE|FD thì ko có khác nhau quá nhìu về mặt lí thuyết
//người ta thường dùng FD làm method
//nếu viết function thì nên chọn FE|FA (nếu ko có this)

//Ngoài ra, ta có thể thêm prop hay method sau khi đã tạo object
promotionBoy1.money = 2000;
promotionBoy1.chuiKhach = function(){
    console.log("Under the hood ko đc thf cook");
    
};
console.log(promotionBoy1);

//nâng cao 1 tý
//this trong method (object > method > this)
let promotionBoy2 = {
    //prop
    nickName:"Lê Mười Điệp",
    //method
    //fd
    showName(){
        console.log("NickName nè " + this.nickName);
    },
    //fe
    showName1: function(){
        console.log("NickName nè " + this.nickName);
    },
    //fa
    showName2: () => {
        console.log("NickName nè " + this.nickName);
    },
};

//this chỉ có giá trị khi runtime | khi hàm đc gọi thì this mới có giá trị
//giá trị của this xác định bằng object gọi method chứa this

promotionBoy2.showName();//fd
//this là promotionBoy2 và promotionBoy2.nickName => "Lê Mười Điệp"
promotionBoy2.showName1();//fe
//this là promotionBoy2 và promotionBoy2.nickName => "Lê Mười Điệp"
promotionBoy2.showName2();//fa
//this là window => window.nickName => undefined

//viết method thì ko nên xài FA vì nó hay có this

// **Điều gì sẽ xảy ra nếu this nằm trong function của method trong object
//(Object > method > function > this)
let promotionBoy3 = {
    //prop 
    nickName : "Lê Mười Điệp",
    //method
    //fd
    showName(){
        let arrow = () =>{
            console.log("NickName là "+ this.nickName);
        };
        arrow();
    },
    //fa
    showName2(){
        let expression = function () {
            console.log("NickName là "+ this.nickName);
        };
        expression();
    },
};
promotionBoy3.showName();// method fd > fa > this
//this nằm trong fa => dù ở normal hay useStrict thì this vẫn bị sút ra ngoài
//nhưng mà may mắn là fa này đc nằm trong mfd
//mà fd thì nó giữ this nên this ko bị bay ra window mà chỉ bay ra mfd
//ai gọi method mfd thì là this => this là promotionBoy3
//promotionBoy3.nickName =>"Lê Đẹp Trai"

//**** */ promotionBoy3.showName2(); // method fd > fa > this
//this nằm trong fe thì sẽ bị giữ và xác định bởi người gọi nó
//trong trường hợp này là ko có ai gọi hết
//nếu ko có ai gọi hết thì mik phải xác định xem ở mode nào
//          use strict                              normal
//ko ai gọi thì là undefined            ko ai gọi thì là window
//undefined.nickName                    window.nickName
//cant read prop of undefined           kết quả là undefined

//FA thì ko phù hợp để làm method
//nhưng nếu FA dùng để làm function bên trong method thì rất phù hợp


//Nâng cao thêm 1 tí
//this trong function của callback trong method của object
//(object > method > callback(callbackfn > this))
let promotionBoy4 = {
    //prop 
    nickName : "Lê Mười Điệp",
    //method
    //fd
    showName(){
        let arrow = () =>{
            console.log("NickName là "+ this.nickName);
        };
        setTimeout(arrow, 3000);
    },
    //fa
    showName2(){
        let expression = function () {
            console.log("NickName là "+ this.nickName);
        };
        setTimeout(expression, 3000);
    },
};
//setTimeout xài callbackFunction như đang xài ngoài lớp ngoài chứa nó


//Nâng cao hơn 1 tý
//tại sao phải dùng this
let promotionBoy5 = {
    nickName: "Lê Mười Điệp",
    age: 25,
    showName(){
        console.log("nickName: "+ this.nickName);  
    },
};

let promotionBoy6 = promotionBoy5;
promotionBoy5 = null;
// promotionBoy6.showName();


//Phần khó nhất
//Nâng cao: HOF
//Higher order function
//1. callback: hàm nhận vào 1 hàm làm argument(đối số)
//2. closure : hàm return về 1 hàm khác
//3. currying: kĩ thuật chuyển đổi 1 hàm từ nhìu parameter thành 
//                  nhìu function liên tiếp có parameter


//Viết hàm nhận vào 2 số , trả ra tổng của 2 số đó
let sumDemo = (a, b)=>{
    return a + b;
};
//viết tắt
sumDemo = (a, b)=> a + b;

//Áp dụng HOF
sumDemo = (a, b)=>{
    return (b) => {
        return a + b;
    };
};
//tắt
sumDemo = (a) => (b) => a + b;

console.log(sumDemo(2)(5));


//HOF: có 3 khái niệm 
//1. callback: hàm nhận vào 1 hàm làm đối số argument

const arr1 = [1, 2, 3, 4, 5];
arr1.forEach((val)=>{
    console.log(val);
});

//2. Closure
// 2.1 lexical scoping: hàm con dùng biến của hàm cha 
// 2.2 closure: 1 hàm return 1 hàm 

//ứng dụng: tạo ra 1 hàm chuyên indentity id(máy tạo id tự động)
const initIdentity = () => {
    let newId = 0;
    return () => {
        return ++newId;
    };
};
//cách xài sai
console.log(initIdentity());
//tạo ra newId = 0, return () => {return ++newId}
console.log(initIdentity()());//1
console.log(initIdentity()());//1

//cách xài đúng là gì
let demoClosure = initIdentity();
console.log(demoClosure());//1
console.log(demoClosure());//2
console.log(demoClosure());//3
console.log(demoClosure());//4

//3.curying: kĩ thuật chuyển từ 1 hàm nhận vào nhiều parameter
//  thành nhiều function có parameter

//Bài tập ứng dụng
//viết 1 hàm duy nhất có thể xử lí 3 bài toán sau
//  tìm các số từ 0 - 10 là số lẻ
//  tìm các số từ 0 - 20 là số chẵn
//  tìm các số từ 0 - 40 là số chia hết cho 3 dư 2

const handle = (end, checkNumFn) =>{
    let result = [];
    //duyệt từ 0 - end để tìm số thỏa điều kiện
    for(let i = 0; i <= end ; i++){
        if(checkNumFn(i)) result.push(i);
    }
    return result;
};
console.log(handle(10, (number)=> number % 2 == 1));
console.log(handle(20, (number)=> number % 2 == 0));
console.log(handle(40, (number)=> number % 3 == 2));

//currying
const handle1 = (end) => (checkNumFn) =>{
    let result = [];
    //duyệt từ 0 - end để tìm số thỏa điều kiện
    for(let i = 0; i <= end ; i++){
        if(checkNumFn(i)) result.push(i);
    }
    return result;
};
console.log(handle1(10)((number) => number % 2 == 1));


//-----------------
//call apply bind
const people = {
    print(age, location) {
        console.log(this.fullname + " " + age + " " + location);
    },
};
people.print(10, "TP HCM");// undefined 10 TP HCM
//this ? people
//people.fullname => undefined

//Kỹ thuật bẻ cong đường dẫn của this bằng call apply và bind
const diep = { fullname: "Lê Hồ Điệp"};
// .call(obj, ...parameter cũ)
people.print.call(diep, 10, "TP.HCM");//Lê Hồ Điệp 10 TP HCM
// .apply(obj,[...parameter cũ])
people.print.apply(diep,[ 10, "TP.HCM"]);//Lê Hồ Điệp 10 TP HCM

//bind
// .bind(obj, ...parameter cũ)() => closure
people.print.bind(diep, 10, "TP HCM")();

// .bind(obj)( ...parameter cũ) => currying
people.print.bind(diep)( 10, "TP HCM");

//
let promotionBoy7 = {
    nickName: "Lê Mười Điệp",
    showName(){
        //this
        let expression = function(){
            console.log(this.nickName);
        }.bind(this);
        expression();
    },
};

promotionBoy7.showName();//Lê Mười Điệp

//datetime
//thời gian trong js là object | dựa vào milisecond
//đc tính từ 1/1/1970 theo chuẩn utc
//có 4 cách để khởi tạo
let a = new Date();
a = new Date();
a = new Date("2024-8-15");
a = new Date(2024, 7, 15 , 21, 23, 0, 0);
//           y/m - 1/d/h/m/s/ms
console.log(a);

// getDate()        : lấy ngày trong tháng
// getDay()         : lấy ngày trong tuần (0: chủ nhật - 6:thứ 7);
// getFullYear()    : lấy năm
// getHours()       : lấy giờ 0-23
// getMilliseconds(): lấy mili giây (0-999)
// getMinutes()     : lấy về phút (0-59)
// getMonth()       : lấy về tháng (0 -11)
// getSeconds()     : lấy về giây (0-59)
// toISOString()    : lấy định dạng thời gian chuẩn

//dùng để bỏ vào DBI/ vì các ngôn ngữ trình duyệt khác
//đều có thể chuyển từ ISO này về dạng bth được 
console.log(a.toISOString());

//windowObject
console.log("Bài 6: WindowObject");
//WindowObject(wo) là đại diện cho cửa sổ trình duyệt
//tất cả các global object, function, biến mà tạo bằng var
//thì đều là method | prop của wo

//ngay cả DOM(Document object model) cũng là của wo
console.log(window.innerHeight);
console.log(window.innerWidth);

let newTab;
setTimeout(() =>{
    newTab = window.open("https://fap.fpt.edu.vn/Default.aspx",
                         "_blank", 
                         "width = 500, height = 500");
    newTab.resizeTo(700,300);

}, 3000);

console.log(window.location);
//href: protocol + hostname + pathname

//history.back()
//history.forward()

//trình duyệt cung cấp 3 loại popup
// alert("ahihi");

/*
let isBeautiful = confirm("Anh Điệp có đẹp trai ko?");
if(isBeautiful){
    console.log("Ghét nhất mấy đứa chỉ bik nói sự thật");
}else{
    console.log("sao lại dối lòng v");
    
}
*/let result = prompt("Nhập tên của bạn đi", "Điệp đẹp trai");

