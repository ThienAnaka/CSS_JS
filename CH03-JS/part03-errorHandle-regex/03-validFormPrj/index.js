// rule validate (những yêu cầu để công nhận là validate)
// email: isRequired, isEmail
// name: isRequired, isName(có thể tiếng việt, tiếng anh, max 50)
// gender: isRequired
// country: isRequired
// password: isRequired, min 8 , max 30
// confirmedPassword: isRequired, min 8 , max 30, isSame(password)
// agree: isRequired
const REG_EMAIL =
  /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-\_]{1,65}\.[a-zA-Z]{1,5}$/;
const REG_NAME =
  /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+)+)?$/;

//viết các hàm nhận vào giá trị, kiểm tra và trả ra chuỗi chửi
//                  nếu kiểm tra mà đúng thì thôi trả ""

const isRequired = (value) => (value ? "" : "That field is required");
const isEmail = (value) => (REG_EMAIL.test(value) ? "" : "Email is invalid");
const isName = (value) => (REG_NAME.test(value) ? "" : "Name is invalid");
const min = (numBound) => (value) => {
    return value.length >= numBound ? "" : `Min is ${numBound}`;
};

const max = (numBound) => (value) => {
    return value.length <= numBound ? "" : `Max is ${numBound}`;
};
//value: gt cần ktra, paramsValue: gt đc ktra
//fieldName1, fieldName2: hiển thị cho đẹp
const isSame = (paramsValue, fieldName1, fieldName2) => (value) => {
    return value == paramsValue ? "" : `${fieldName1} is not same ${fieldName2}`;
}

//học cách mô tả trường dữ liệu như 1 frontend đẳng cấp thế giới như Lê Điệp
/*
    Đối với 1 inputNode thì ta phải nhìn nó dưới dạng 1 object có
    các thành phần sau
        {
            value: giá trị cần kiểm tra của input
            funcs: mảng các hàm mà mik sẽ kiểm tra value: hàm trong đó có dạng
                        (value) => chửi
            parentNode: Node cha của thằng input để đặt câu chửi
            controlNodes: mảng các input để tô đỏ (thêm class is-invalid)
        }
let nameNode = document.querySelector("#name");//nút inputName
let paramsObject = {
    value: nameNode.value,
    funcs: [isRequired, isName],
    parentNode: nameNode.parentElement,
    controlNodes: [nameNode],
}
*/

//viết hàm tạo thông báo chửi
const createMsg = (parentNode, controlNodes, msg) => {
    //tạo div chứa msg cần chửi
    let invalidDiv = document.createElement("div");
    invalidDiv.innerHTML = msg;//có thể xài text content
    invalidDiv.className = "invalid-feedback";//đặt class cho div 
    parentNode.appendChild(invalidDiv);//đặt div vào parentNode
    //tô đỏ các nút input
    controlNodes.forEach((inputNode) => {
        inputNode.classList.add("is-invalid");
    });
};

//test
// let nameNode = document.querySelector("#name");
// createMsg(nameNode.parentElement, [nameNode], "ahihi đồ chó");

//hàm isValid: là hàm nhận vào obj có dạng:
//{value, funcs, parentNode, controlNodes}
//duyệt funcs, đi qua từng func với value
//          nếu bị chửi gọi createMsg và return câu chửi
//nếu duyệt funcs mà ko bị chửi, ko bị dừng thì 
//          return ""   //viết hàm trả ra phải cùng 1 kiểu
const isValid = ({ value, funcs, parentNode, controlNodes }) => {
    //nên truyền vào 1 object để dễ đọc, ko nên truyền vào 1 biến
    //duyệt danh sách các hàm cần kiểm tra
    for (const funcCheck of funcs) {
        let msg = funcCheck(value);
        if (msg) {
            createMsg(parentNode, controlNodes, msg);
            return msg;
        }
    };
    return "";
};

//test 
// let nameNode = document.querySelector("#name");
// isValid({
//     value: nameNode.value,
//     funcs: [isRequired, isName],
//     parentNode: nameNode.parentElement,
//     controlNodes: [nameNode],
// });

//hàm xóa thông báo lỗi
const clearMsg = () =>{
    //tìm những input có class is-invalid và remove class đó đi
    document.querySelectorAll(".is-invalid").forEach((inputNode)=>{
        inputNode.classList.remove("is-invalid");
    });
    //tìm những div chửi và xóa luôn
    document.querySelectorAll(".invalid-feedback").forEach((divMsg)=>{
        divMsg.remove();//xóa node
    });
}

//main flow
document.querySelector("form").addEventListener("submit", (event) =>{
    event.preventDefault();//chặn reset trang
    //dom tới các input cần kiểm tra
    const emailNode = document.querySelector("#email");
    const nameNode = document.querySelector("#name");
    const genderNode = document.querySelector("#gender");
    const passwordNode = document.querySelector("#password");
    const confirmedPasswordNode = document.querySelector("#confirmedPassword");
    //
    const countryNode = document.querySelector("input[name='country']:checked");
    const agreeNode = document.querySelector("input#agree:checked");

    //kiểm tra
    let errMsgs = [
        //email 
        isValid({
            value: emailNode.value,
            funcs: [isRequired, isEmail],
            parentNode: emailNode.parentElement,
            controlNodes: [emailNode],
        }),
        //name 
        isValid({
            value: nameNode.value,
            funcs: [isRequired, isName],
            parentNode: nameNode.parentElement,
            controlNodes: [nameNode],
        }),
        //gender 
        isValid({
            value: genderNode.value,
            funcs: [isRequired],
            parentNode: genderNode.parentElement,
            controlNodes: [genderNode],
        }),
        //password 
        isValid({
            value: passwordNode.value,
            funcs: [isRequired, min(8), max(30)],
            parentNode: passwordNode.parentElement,
            controlNodes: [passwordNode],
        }),
        //confirmedPassword 
        isValid({
            value: confirmedPasswordNode.value,
            funcs: [
                isRequired,
                min(8),
                max(30),
                isSame(passwordNode.value, "confirmed Password", "password"),
            ],
            parentNode: confirmedPasswordNode.parentElement,
            controlNodes: [confirmedPasswordNode],
        }),
        //country
        isValid({
            value: countryNode ? countryNode.value : "",
            funcs: [isRequired],
            parentNode: document.querySelector(".form-check-country"),
            controlNodes: document.querySelectorAll("input[name='country']"),
        }),
        //agree
        isValid({
            value: agreeNode ? agreeNode.value : "",
            funcs: [isRequired],
            parentNode: document.querySelector("#agree").parentElement,
            controlNodes: document.querySelectorAll("#agree"),
        }),
    ];

    console.log(errMsgs);
    let isvalidForm = errMsgs.every((item) => item == "");
    if(isvalidForm){
        alert("Form is valid");
    }
});

