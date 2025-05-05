//02-promise.js
//Promise: là 1 lời hứa sẽ diễn ra trong tương lai: anh sẽ làm gì đó.....
//Promise are eager not lazy: hứa phải làm liền, ko có hoãn 

//1 lời hứa cơ bản:
//  anh hứa sẽ đi vũng tàu và mua bánh bông lan trứng muối về cho em 
//  trong tháng 10!!!
//      nếu thành công: "niềm tin, 1 nụ hôn"
//      nếu thất bại  : "1 sự thất vọng"
//1 lời hứa còn phụ thuộc vào tác nhân bên ngoài

// 1 lời hứa có trạng thái, và chỉ nằm 1 trong 3 trạng thái trong cùng
//  thời điểm thoi
//  pending: đang chờ kết quả, đang thực thi, đang thực hiện

//  đầu tháng 10 sếp ép ảnh ra vũng tàu công tác 2 ngày
//  => rất dễ để mua bông lan trứng muối => giữ đc lời hứa
//  onFullFilled: cái Promise sẽ trả ra resolve("1 nụ hôn")


//  nếu như xui, trời đánh thánh vật, ảnh bệnh hết nguyên tháng 10
//  thì ko đi vt đc => ko mua đc bánh => thất hứa
//  onRejected: cái Promise sẽ dùng reject("1 sự thất vọng")

//cú pháp:
// new Promise(function(resolve, reject){});
// new Promise((resolve, reject) =>{});

//Tạo bối cảnh
//-- vai 1: tác nhân ngoại cảnh - Chúa
// let wallet = 7000;

//-- vai 2: anh trai hứa với cô gái 
//"anh hứa sẽ mua cho em chiếc cà rá 5000$"
// let p1 = new Promise((resolve, reject)=>{
//     if(wallet >= 5000){
//         resolve("1 nụ hôn");
//     }else{
//         reject("1 sự thất vọng");
//     }
// });


//-- vai 3: cô gái nhận lời hứa
// p1.then((value)=>{// value nhận giá trị của resolve
//     console.log(`Nếu code chạy vào đây, nghĩa là anh ấy đủ tiền mua nhẫn
//         và lời hứa đã chạm đc vào Resolve => code vào then => value là những gì
//         có trong resolve`);
//     console.log(value);
    
// }).catch((error)=>{
//     console.log(`Nếu code chạy đc vào đây, nghĩa là anh ấy ko đủ tiền 
//         và lời hứa đã chạm vào reject => code vào catch => error
//         chính là những gì có trong reject`);
//     console.log(error);
// });

//thử chuyển 1 async callback về thành 1 promise
// let data;// undefined

// //mô phỏng rằng anh sẽ lên server và lấy dữ liệu về
// //và việc này chắc chắn mất thời gian 
// setTimeout(()=>{
//     data = {name: "Điệp", age: "25"};
// },3000);

// console.log(data);

// Dùng Promise để chuyển thành đồng bộ 
// Ép server hứa rằng sẽ trả dữ liệu cho mik sau 1 khoảng thời gian nhé
// let p2 = new Promise((resolve, reject)=>{
//     // server luôn thành công và trả ra resolve, ko bao h reject
//     //server chỉ thất bại trong trường hợp: ko giao tiếp đc(sai đường dẫn)hoặc rớt mạng
//     setTimeout(()=>{
//         resolve({name: "Điệp", age: 24});
//     },3000);
// });

//đóng vai client: người dùng 
//xác thực lời hứa từ server
// let data;
// p2.then((value)=>{
//     data = value;
//     console.log(data);    
// });

//giai đoạn từ 0 đến 3s gọi là pending
//nếu sau đó resolve thì em có trạng thái onFullFilled vào then
//nếu reject thì em sẽ có onRejected vào catch
//nhưng server ko bao giờ reject
//nếu thất bại thì server vẫn cố resolve("câu chửi")

//Promise are eager not lazy
//vd: cách 1: ko hay // ngay từ lúc viết xong là code đã chạy = 2 r
// let a = 1;

// let p3 = new Promise((resolve, reject)=>{
//     a++;
// });

// console.log(a);

//cách 2: hơi ko hay: function
// let a = 1;

// function ahihi(){
//     let p3 = new Promise((resolve, reject)=>{
//         a++;
//     });
//     return p3;
// }
// //ahihi().then //vì đã gọi hàm nên tạo ra lời hứa, sau đó ném lời hứa ra ngoài  
                  // nên ai gọi hàm ahihi sẽ nhận đc p3 và với ahihi là lời hứa 
                  // nên có thể .then, .catch 
// console.log(a);


//cách 3: dùng arrow / tránh việc tạo quá nhìu tên hàm (viết hàm arrow xong return 1 Promise)
// let a = 1;
// //tạo hàm để trả ra promise, khi return thì promise mới đc tạo 
// //để kiểm soát
// let p3 = () =>{ //hàm  trả ra Promise
//     return new Promise((resolve, reject)=>{
//     a++;
// });
// };
// //p3().then  // khi gọi p3 thì Promise mới đc tạo xong trả ra
                // lúc này p3 là Promise nên có thể .then, .catch 
// console.log(a);

//****phải kiểm soát lời hứa, khi nào có hiệu lực, khi nào mik cho chạy thì mới đc chạy 


//-------------------------------------------------
//1 promise chỉ có thể rơi vào 1 trong 3 trạng thái sau:
//  pending     onFullfilled        onRejected
//               resolve                reject

//resolve => onFullFilled => then
//reject  => onRejected   => catch
//resolve và reject rất giống return 

//resolve ném giá trị cho then dưới dạng value
//reject ném giá trị cho catch dưới dạng error

//resolve và reject ko thể ngừng code lại như return
//trong Promise nếu chạm vào resolve trước thì onFullFilled
//              nếu chạm vào reject trước thì onRejected

// let p4 = () => {
//     return new Promise((resolve, reject) =>{
//         resolve("ahihi");
//         reject("Lỗi chà bá");
//         console.log("xin chào các bạn mọi người");
//     });
// };
// vì code gặp resolve trc nên sẽ ở t.thái onFullfilled và ko ngừng lại, muốn dừng lại thì dùng return 
        // nếu gặp reject trc thì ngược lại, sau đó code sẽ xuống console.log
        //in ra "xin chào các bạn mọi người" và sau đó mới xún gọi hàm p4 và vào then in ra value


// //xác thực
// p4().then((value) => {
//     console.log("thành công " + value);
// }).catch((error)=>{
//     console.log("thất bại " + error);
// });
// //cách viết thứ 2
// p4().then(  //.then chứa cả 2 callbackfunc(resolve và reject) 1 cái xử lí thành công, 1 cái xử lí thất bại 
//     (value) => {
//         console.log("thành công " + value);
//     },
//     (error) => {
//         console.log("thất bại " + error);
//     }
// );

//Main concept
//*1. nếu return trong then | catch |  thì ta sẽ đưa Promise về thành onFullFilled
// let p5 = () => {
//     return new Promise((resolve, reject) => {
//        reject("Lỗi chà bá");
//     });
// };
// //xác thực
// p5().then((value)=>{
//     console.log("P5 đã thành công và nhận đc " + value);
// }).catch((error)=>{
//     console.log("P5 đã thất bại và bị " + error);
//     return "Lê Hồ Điệp";//return Promise.resolve("Lê Hồ Điệp") // lệnh return này sẽ biến toàn bộ  
                                                                  //cụm trên thành onFullfilled và về lại tk then gần nhất 
// }).then((value) => {
//     console.log("Lần này anh ấy đã có đc " + value);
// })

//2*. nếu throw trong then | catch thì sẽ đưa promise về onRejected
// let p5 = ()=>{
//     return new Promise((resolve, reject) => {
//        resolve("vui ghê");
//     });
// };

// //xác thực
// p5().then((value) => {
//     console.log("value là " + value);
//     throw "ahuhu";//tương đương với Promise.reject("ahuhu") 
// }).catch((error) => {
//     console.log("P5 đã thất bại và bị " + error);
//     return "Lê Hồ Điệp";//return Promise.resolve("Lê Hồ Điệp")
// }).then((value) => {
//     console.log("Lần này anh ấy đã có đc " + value);
// }).catch((error) =>{
//     console.log("error là " + error);
// });

//dùng promise để xử lí bất đồng bộ
//vd ta có 2 task cần làm 
//task 1: lấy profile từ server về (3s)
//task 2: lấy article từ server về (2s)

//mô phỏng việc lên database và lấy profile từ server về
//ép server phải hứa rằng sau 3s thì đưa cho mình Profile
let getProfile = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Điệp", age: 25 });
        }, 3000);
    });
};

let getArticle = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["hoàng tử bé", "Mèo dạy hải âu bay", "Cây cam ngọt của tôi"]);
        }, 2000);
    });
};

//nếu 2 tác vụ này là độc lập: 3s
getProfile().then((value)=>{// mỗi tk sẽ tự động đợi những tk bên trong của callback vì nó là 1 Promise
    console.log(value);
});

getArticle().then((value)=>{
    console.log(value);
});

//nếu bây giờ anh muốn có nguyên nhân kết quả: 5s
// getProfile().then((value)=>{
//     console.log(value);
//     getArticle().then((value)=>{
//         console.log(value);
//     });
// });
//promise hell

//chuẩn : cách xài Promise đồng bộ mà ko cần async await
getProfile().then((value)=>{
    console.log(value);
    return getArticle();
}).then((value)=>{
    console.log(value);
});
