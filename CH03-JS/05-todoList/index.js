document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault();//chặn sự kiện reset trang khi submit
    const name = document.querySelector("#name").value;
    //tạo ra đối tượng item
    const item = {
        id: new Date().toISOString(),
        name: name.trim(), //trim để xóa khoảng cách thừa
    };
    //hiển thị obj item lên UI
    addItemToUI(item);
    //lưu trữ item lên LocalStrorage
    addItemToLS(item);
});

//addItemToUI: hàm nhận vào item và hiển thị lên UI
const addItemToUI = (item) => {
    const {name, id} = item;//destructuring
    const newCard = document.createElement("div");
    newCard.className = 
        "card d-flex flex-row justify-content-between align-items-center p-2 mb-3";
    newCard.innerHTML = `
        <span>${name}</span>
        <button data-id="${id}"  class="btn btn-danger btn-sm btn-remove">Remove</button>
    `;
    document.querySelector(".list").appendChild(newCard);
};

// getList: lấy danh sách các item từ ls về
const getList = () => {
    return JSON.parse(localStorage.getItem("list")) || [];
};

const addItemToLS = (item) => {
    const list = getList();// lấy danh sách từ LocalStrorage về
    list.push(item); // nhét item vào danh sách
    localStorage.setItem("list", JSON.stringify(list));// lưu list đã nhét item lên lại LocalStrorage
};

//hàm render tất cả item lên UI mỗi khi vào trang 
const init = () => {
    const list = getList();// lấy danh sách từ LocalStrorage về
    list.forEach((item) => {
        addItemToUI(item);
    });
};
init();

document.querySelector(".list").addEventListener("click", (event) => {
    if(event.target.classList.contains("btn-remove")){
        const nameItem = event.target.previousElementSibling.textContent
        const isConfirmed = confirm(`Bạn có chắc muốn xóa item: ${nameItem} không ?`);
        if(isConfirmed){
            //xóa trên UI
            event.target.parentElement.remove();
            //xóa trên ls
            const idRemove = event.target.dataset.id;//lấy id cần remove từ data-id của nút xóa
            removeItemFromLS(idRemove);//sau khi confirm rồi lấy id để xóa
        }
    };
});

//Hàm nhận vào id từ btn-remove đã nhấn, dùng id đó tìm và xóa item trong ls
const removeItemFromLS = (idRemove) => {
    let list = getList();//lấy danh sách item về
    list = list.filter((item) => item.id != idRemove);//lọc những thằng id khác id cần xóa
    localStorage.setItem("list", JSON.stringify(list));//lưu list đã cập nhật lên lại
};

//remove all
document.querySelector("#btn-remove-all").addEventListener("click", (event) =>{
    const isConfirmed = confirm(`Bạn có chắc là muốn xóa hết item không ?`);
    if(isConfirmed){
        document.querySelector(".list").innerHTML = "";
        localStorage.removeItem("list");
    }
});

//chức năng filter
document.querySelector("#filter").addEventListener("keyup", (event) => {
    let inputValue = event.target.value; //lấy value từ ô input diễn ra sự kiện keyup
    let list = getList();
  
    list = list.filter((item) => item.name.includes(inputValue));
    //xóa các item trong list để render list vừa lọc
    document.querySelector(".list").innerHTML = "";
    list.forEach((item) => {
      addItemToUI(item);
    });
  });