let btnList = document.querySelectorAll(".navtab-btn");
let contentList = document.querySelectorAll(".tab-content-item");
//duyệt qua từng nút
btnList.forEach((btn)=>{
    //nút nào cũn chờ đc click
    btn.addEventListener("click", (event)=>{
        //nếu như có 1 nút bị nhấn thì duyệt danh sách các nút và xóa actived
        btnList.forEach((_btn)=>{
            _btn.classList.remove("actived");
        });
        //tk nút nào vừa bị nhấn thêm actived cho tui
        event.target.classList.add("actived");
        //xóa actived của các content
        contentList.forEach((content)=>{
            content.classList.remove("actived");
        });
        //lấy id của tk vừa bị bấm
        let id = event.target.id;
        let contentChecked = document.querySelector(`
            .tab-content-item[data-id="${id}"]
        `);
        contentChecked.classList.add("actived");
    });
});