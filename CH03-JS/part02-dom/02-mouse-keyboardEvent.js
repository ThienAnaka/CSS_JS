let btnAdd = document.querySelector("#btn-add");

btnAdd.addEventListener("click", (event)=>{
    console.log(event.target);
    //return ra element vừa dính sự kiện(***RẤT QUAN TRỌNG***)
    //thực hiện
    let inputNode = document.querySelector("#name");
    let newItem = document.createElement("li");
    newItem.className = "card mb-3 p-2";
    newItem.innerHTML = `<p>${inputNode.value}</p>`;
    let list = document.querySelector("#list");
    list.appendChild(newItem);
    inputNode.value = "";
});

//mouseover | mouseout | dblclick


//keyboard Event
let inputNode = document.querySelector("#name");
inputNode.addEventListener("change", (event)=>{
    console.log(event);
    console.log(inputNode.value);
});

//keydown | keypress | keyup | input | change

//cookie | localStorage
localStorage.setItem("name", "điệp 10 ring");

//localStorage chỉ có thể lưu đc chuỗi và số mà thôi
//  nếu muốn lưu object | mảng thì phải chuyển thành chuỗi dạng json

const profile = {
    name: "Điệp đẹp trai",
    age: 25,

};

console.log(profile);

let str = JSON.stringify(profile);
console.log(str);

localStorage.setItem("profile", str);

//lấy giá trị từ localStorage ra xài
let data = localStorage.getItem("profile");
let obj = JSON.parse(data);
console.log(obj);

//ôn bootstrap , function, bài hôm nay
