//01-json-ajax-fetch.js
//----------------------------------------------------------|
//json: js object notation                                  |
//là 1 chuỗi đc viết dưới dạng js object                    |
//dùng để lưu trữ dữ liệu và giao tiếp đa nền tảng          |
//nó có thể lưu trữ các dạng như:                           |
//number, string, boolean, array, object, null(ko nên lưu)  |
//ko thể lưu method và function                             |
//JSON có 2 thao tác chính JSON.parse và JSON.stringify     |
//----------------------------------------------------------|

const obj1 = {
  name: "Điệp đẹp trai",
  age: 22,
  status: "hay giận dỗi",
  sayHi() {
    console.log("Hello, nhìn cái gì");
  },
};
let myJson = JSON.stringify(obj1);
console.log(obj1);
console.log(myJson);
//cú pháp của json
//vs object thì data là cặp key: value
//data đc ngăn cách bởi dấu ,
//object đc bọc trong {}
//array đc bọc trong []
//string đc bọc bởi ""
//key phải là string và đc bọc bởi ""
//ko lưu trữ đc hàm và method

let arr = ["cam", 22, "chuối", "ối"];
//  '"cam", 22, "chuối", "ối"'
let a = 1; //'1'
let str = "ahihi"; // '"ahihi"'
let bool = true; // 'true'
console.log(JSON.stringify(arr));

//-----------------------------------------------|
//AJAX: Asynchronous javascript and XML          |
//AJAX ko phải là ngôn ngữ lập trình             |
//  - HTML: hiển thị dữ liệu dưới dạng giao diện |
//  - CSS : trang trí giao diện                  |
//  - JS  : tạo ra tính logic                    |
//  - XML : định dạng dữ liệu (ko đc xài nhìu)   |
//  - JSON: định dạng dữ liệu                    |
//-----------------------------------------------|

//|-----------------------------------------------------|
//AJAX giúp cho chúng ta đọc dữ liệu trả về từ server   |
//  giúp gửi dữ liệu ở chế độ ngầm                      |
//  cập nhật trang web mà ko cần phải reset trang       |
//  là nền tảng phát triển của react, angular và vue    |
//|-----------------------------------------------------|

//|--------------------------------------------------------------------------------------------------------------------------|
//  có các phương pháp giao tiếp với server                                                                                  |
//1. XMLHttpRequest(XHR) (video)                                                                                             |
//   |
//2. fetchAPI: cung cấp cho mik khả năng gửi request        /       nhận response                                            |
// [ép server hứa]          [1 cái kiện hàng](có thể là dữ liệu hoặc chửi)           |
//|--------------------------------------------------------------------------------------------------------------------------|

const baseURL = "https://66fd4470c3a184a84d19c13d.mockapi.io";
// dùng fetch để tạo request yêu cầu server phải trả dữ liệu của toàn bộ
// user trong table users cho mik
// fetch dựa vào công nghệ promise

//mặc định fetch là GET, ko cần mô tả
// fetch(`${baseURL}/users`)
//   .then((response) => {
//     //nhận kiện hàng và nghiên cứu
//     // console.log(response);
//     //kiểm tra kiện hàng
//     if (response.ok) {
//       //chưa bik
//       return response.json(); //khui hàng
//     } else {
//       throw new Error(response.statusText);
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//demo post 1 user mới lên table users
fetch(`${baseURL}/users`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Điệp đệ quy" }),
})
  .then((response) => {
    //nhận kiện hàng và nghiên cứu
    // console.log(response);
    //kiểm tra kiện hàng
    if (response.ok) {
      //chưa bik
      return response.json(); //khui hàng
    } else {
      throw new Error(response.statusText);
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
