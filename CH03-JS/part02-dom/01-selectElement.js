//DOM: document object model
//liên kết DOM | móc 1 biến vào đối tượng trong DOM
//nếu muốn DOM 1 đối tượng thì có 2 cách:
let inputNote = document.getElementById("name");//truyền vào giá trị id
//nhược điểm tìm kiếm p.tử dựa trên id và chỉ bằng id
inputNote = document.querySelector("#name");//truyền vào Selector css
//muốn tìm cái gì thì gõ vào
console.log(inputNote);

//querySelector: cho phép ta query tìm kiếm phần tử dựa trên selector css
//dù dùng class hay id thì vẫn thu về đc 1 phần tử

//vậy thì nếu mà mik cần lấy về 1 mảng các thẻ card thì sao?
//let cardList = [...document.getElementsByClassName("card")];//HTMLCollection
let cardList = document.querySelectorAll(".card");// NodeList
console.log(cardList);

cardList.forEach((item) => {
    console.log(item);
});

//HTMLCollection giống mảng nhưng thiếu các method cần thiết để xử lí phần tử
//NodeList giống mảng nhưng đầy đủ hơn 1 tí

//
let firstCard = document.querySelector(".card");
console.log(firstCard);
console.log(firstCard.childNodes);//[text, h2, text, p, text]
console.log(firstCard.children);//HTMLCollection [h2, p]
// children cho ds các phần tử con
console.log(firstCard.classList);// ['card', 'p-2', 'mb-3']
// đem về 1 mảng gồm các class
console.log(firstCard.className);//"card p-2 mb-3" in ra chuỗi
console.log(firstCard.parentElement);//<div class="container card-group">
console.log(firstCard.nextElementSibling);//tìm tk giống nhưng nằm ở phía dưới
console.log(firstCard.firstChild);//text
console.log(firstCard.firstElementChild);//h2


//tạo mới 1 element
let newCard = document.createElement("div");
// newCard.classList.add("card", "mb-3", "p-2");
newCard.className = "card mb-3 p-2";
newCard.innerHTML = `
    <h2>Tao đc tạo bằng JS</h2>
    <p>Tao là 1 node fakee</p>
`;
let cardGroup = document.querySelector(".card-group");
// cardGroup.appendChild(newCard);
cardGroup.replaceChild(newCard, cardGroup.children[1]);

//thêm attribue vào node
firstCard.setAttribute("ahihi", "1");
console.log(firstCard.getAttribute("ahihi"));//1
firstCard.removeAttribute("ahihi");
