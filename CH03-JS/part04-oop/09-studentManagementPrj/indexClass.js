//Quản lí sinh viên = OOP
//tất nhiên ko dùng class
class Student {
constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    this.id = new Date().toISOString();
}
}
//khi mà mik tạo ra sinh viên r thì mik sẽ lưu vào ls
//----------------------Store------------------------
// class Store chứa method xử lí localStorage
class Store{
    constructor() { }
    //.getStudents(): hàm lấy danh sách student từ localStorage
    getStudents() {
        return JSON.parse(localStorage.getItem("students")) || [];
    };
    //.add(student):hàm nhận vào student và thêm vào localStorage
    add(student) {
        //lấy ds student về 
        let students = this.getStudents();
        //nhét student vào students
        students.push(student);
        //lưu lên lại localStorage
        localStorage.setItem("students", JSON.stringify(students));
    };

    //.getStudent(id): hàm nhận vào id , tìm student trong students có id giống như id đc nhận vào
    getStudent(id) {
        //lấy ds students
        let students = this.getStudents();
        //tìm student có id giống id cần tìm trong students
        let student = students.find((student) => student.id == id);
        return student;
    };

    //remove(id): hàm nhận vào id, tìm student sỡ hữu id đó và xóa
    remove(id) {
        let students = this.getStudents();
        //dùng id tìm vị trí student
        let indexStudent = students.findIndex((student) => student.id == id);
        students.splice(indexStudent, 1);
        //xóa xong thì lưu lại ls
        localStorage.setItem("students", JSON.stringify(students));
    }
}
//dùng student có đc để hiển thị lên giao diện
//------------------RenderUI------------------
//RenderUI là tk chuyên các method xử lí giao diện
class RenderUI{
    constructor() { }

    //add(student): nhận vào student và biến nó thành tr để hiển thị table
    add({ id, name, birthday }) {
        //lấy students
        let store = new Store();//instance: object tạo từ Store
        let students = store.getStudents();
        let newTr = document.createElement("tr");
        newTr.innerHTML = `
        <td>${students.length}</td>
        <td>${name}</td>
        <td>${birthday}</td>
        <td>
            <button class="btn btn-danger btn-sm btn-remove" data-id="${id}">
                Xóa
            </button>
        </td>
    `;
        document.querySelector("tbody").appendChild(newTr);
        //reset các input field
        document.querySelector("#name").value = "";
        document.querySelector("#birthday").value = "";
    };

    //làm hàm hiển thị thông báo lên UI
    alert(msg, type = "success") {
        let divAlert = document.createElement("div");
        divAlert.className = `alert alert-${type}`;
        divAlert.innerHTML = msg;
        document.querySelector("#notification").appendChild(divAlert);
        setTimeout(() => {
            divAlert.remove();
        }, 2000);
    };

    //.renderAll(): hàm này lấy ds sinh viên students, biến từng student thành tr
    //và hiển thị lên tbody
    renderAll() {
        //lấy đc ds students
        let store = new Store();//instance của Store
        let students = store.getStudents();
        //duyệt students và đi qua từng student trong ds, biến từng student thành tr
        //dồn lại thành 1 chuỗi siêu dài, nhét vào tbody
        let htmlContent = students.reduce((total, student, studentIndex) => {
            const { id, name, birthday } = student;
            let str = `
            <tr>
                <td>${student.index + 1}</td>
                <td>${name}</td>
                <td>${birthday}</td>
                <td>
                    <button class="btn btn-danger btn-sm btn-remove" data-id="${id}">
                        Xóa
                    </button>
                </td>
            </tr> 
        `;
            return total + str;
        }, "");
        //nhét cái chuỗi siêu dài vào tbody
        document.querySelector("tbody").innerHTML = htmlContent;
    }
}
//--------------main flow -------------------
//main flow(dòng chảy sự kiện chính)
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();//chặn reset trang
    //lấy data từ các input
    let name = document.querySelector("#name").value;
    let birthday = document.querySelector("#birthday").value;
    //dùng data thu đc từ các input tạo student
    let newStudent = new Student(name, birthday);
    //lưu vào ls
    let store = new Store();//tạo instance của Store
    store.add(newStudent);
    //hiển thị UI
    let ui = new RenderUI();
    ui.add(newStudent);
    ui.alert(`Đã thêm thành công sv có tên ${name}`);
});

document.addEventListener("DOMContentLoaded", (event) => {
    //đợi mọi thứ load xong hết r mới thêm vào tbody
    let ui = new RenderUI();
    ui.renderAll();
});

//chức năng xóa
document.querySelector("tbody").addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-remove")) {
        let idRemove = event.target.dataset.id;//lấy id của nút vừa nhấn
        //id này giúp mik tìm đc student muốn xóa
        let store = new Store();
        let student = store.getStudent(idRemove);
        //getStudent là hàm nhận vào id tìm sinh viên có id tương ứng trong ls: chưa viết
        let isComfirmed= confirm(`Bạn có chắc là muốn xóa ${student.name}`);
        if(isComfirmed){
            //xóa ls
            store.remove(idRemove);//từ id của nút, tìm và xóa
            //xóa ui
            let ui = new RenderUI();
            ui.renderAll();
            //thông báo xóa thành công
            ui.alert(`Sinh viên ${student.name} đã bị xóa`, "danger");
        }
    }
});
