//02-Prototypal-inheritance.js
//Prototypal-inheritance: kế thừa nguyên mẫu(kế thừa 2 object với nhau)
//[[Prototype]]
//trong bất cứ object nào thì cũng luôn có 1 thuộc tính ẩn tên là [[Prototype]]
//      [[Prototype]] là thuộc tính chứa thông tin tiền thân của object đó
//                      chứa thằng tạo ra nó | cha nó
//      ta không thể .[[Prototype]] được
//      muốn truy cập vào [[Prototype]] thì phải thông qua 
//                  accessor prototype có tên là __proto__
let longEar = {
    ear: "long",
};

let pinkRabbit = {
    jump: true,
};

let congido = {
    eat: true,
    walk(){
        console.log("Tụi chạy bộ nè");
    },
};
//congido là con của pinkRabbit
congido.__proto__ = pinkRabbit;
congido.__proto__.__proto__ = longEar;
// congido > pinkRabbit > longEar
//  con         cha         ông
console.log(congido);
console.log(congido.ear);//long
console.log(pinkRabbit.eat);//undefined
console.log(pinkRabbit.ear);//long

//giờ tao muốn congido cập nhật ear thành "short"
// congido.ear = "short";//js sẽ ko cập nhật thằng ear của cha
//          tránh ảnh hưởng những thằng con khác
//  tạo ra 1 ear khác ở ngay lớp của nó =>  congido có 2 ear
//khi nó xài thì nó ưu tiên xài ear gần
congido.__proto__.__proto__.ear = "short";
console.log(congido.ear);//short
//thấy ear gần nhất
console.log(pinkRabbit.ear);//short 
//ko xài ngược lên đc
console.log(longEar.ear);


//lưu ý với __proto__
//trước ES6(2015) ko có cách nào để truy cập vào [[prototype]]
//  hầu hết các trình duyệt thêm vào accessor property __proto__
//  __proto__ ko phải là cách truy cập chính thống của js
//  __proto__ tính tới thời điểm hiện tại vẫn chưa bị loại bỏ
//  __proto__ có thể thay thế bằng
//  Object.getPrototypeOf(Obj)
//  Object.setPrototypeOf(Obj, Obj2)

//ví dụ nâng cao
let student = {
    lastName: "Điệp",//value property
    firstName: "Lê",//value property
    //accessor property
    get fullname()  {
        return this.firstName + " " + this.lastName;
    },
    set fullname(newName){
        [this.firstName, this.lastName] = newName.split(" ");
    },
};

let user = {
    isUser: true,
    __proto__ : student,
};
user.fullname = "Trà Long";
console.log(user);

