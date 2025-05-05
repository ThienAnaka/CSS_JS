//06-class-classinhertance.js
//class là cái khuôn
//     bên trong class có constructor là cái phễu, prop, method
//   class dùng constructor để tạo ra object(bức tượng)

class User{
    constructor(fullname){
        [this.firstName, this.lastName] = fullname.split(" ");
    }
    show  () {
        console.log(`Tôi tên ${this.firstName} và họ là ${this.lastName}`);
        
    }
}

let diep = new User("Lê Điệp");
/*
diep{
    firstName: "Lê",
    lastName: "Điệp",
    [[prototype]]: user.prototype => class User
                                           constructor
                                           show()
}    
*/
console.log(diep);
console.log(diep.__proto__);
console.log(diep.__proto__ == User.prototype);//true
console.log(typeof User);//function
console.log(User.prototype.constructor == User);//true

//class còn đc gọi với 1 cái tên khác là `syntactic sugar`
//`syntactic sugar`: cú pháp kẹo đường => ý chỉ sự thay đổi về mặt
//              syntax cho người mới để dễ tiếp cận hơn 

//tạo hàm có tên là student nhái lại class User
function Student(fullname){
    [this.firstName, this.lastName] = fullname.split(" ");
    // this.show =  function(){
    //     console.log(`Tôi tên ${this.firstName} và họ là ${this.lastName}`);  
    // };
}

Student.prototype.show =  function() {
    console.log(`Tôi tên ${this.firstName} và họ là ${this.lastName}`);
};

//điểm khác nhau giữa class User và constructor function Student là gì?
//1. Về cách xài
// let hung = new User("Thế Hùng");//lỗi
let hung = new Student("Thế Hùng");
console.log(hung);
//student bản chất cũng chỉ là function thoi
//nếu new Student thì nó hiểu là ta dùng function với mục đích tạo object
//nếu thiếu new thì Student đc hiểu là function bth đang thiếu return
// => thiếu return là undefined

//2. về mặt hình ảnh
console.log(User);
console.log(Student);

//3. code bên trong class đc viết ở use strict mode

//III - các Class mà ta tạo ở trên là class declaration
let User1 = class Ahihi{
    constructor(fullname){
        [this.firstName, this.lastName] = fullname.split(" ");
    }
    show  () {
        console.log(`Tôi tên ${this.firstName} và họ là ${this.lastName}`);
        
    }
};

let obj = new User1("Tuấn Đàm");
console.log(obj);

/*Biểu diễn
tạo ra 1 hàm dùng để tạo class
*/
function makeClass() {
    class Ahihi {
        constructor(fullname) {
            [this.firstName, this.lastName] = fullname.split(" ");
        }
        show() {
            console.log(`Tôi tên ${this.firstName} và họ là ${this.lastName}`);

        }
    }
    return Ahihi;
};
let User2 = makeClass();


//compute name
class User5{
    firstName = "Nguyễn";
    ["show" + "Name"](){
        console.log("Hello");
    }
}

let hue = new User5();
hue.showName();

//symbol? tạo ra 1 đoạn mã đặc biệt và giấu nó khỏi người dùng khi chạy

/*
ôn cũ trong chương này
ôn lại các method của array
ôn lại this 
*/

//cảnh giác this trong các method của class
class button {
    constructor(value){
        this.value = value;
    }
    click(){
        console.log("Giá trị là " + this.value);
    }
};
let btn = new button("Ahihi");
/*
btn{
    value: "Ahihi";
    [[prototype]]: button.prototype => class button
                                        constructor
                                        click()
}
*/
// btn.click();

//anh muốn hàm click này đc chạy sau 3s thì sao?
// setTimeout(btn.click(), 3000);
//ra đáp án đúng, nhma xài sai
//truyền vào btn.click() là sai cách xài 
//khi mà btn.click() thì nghĩa là hàm click đc chạy lun, trước cả khi 3s

//
// setTimeout(btn.click, 3000);//Giá trị là undefined
//ra đáp án sai, nhma xài đúng 
//truyền vào btn.click là xài đúng
//btn.click là công thức, và sau 3s thì công thức đc chạy
//xui là trong click có this, khi công thức đc gọi trễ thì ko còn là ng gọi nữa
// this => window => window.value = undefined

//C1:
// setTimeout(() => {
//     btn.click();
// }, 3000);

//C2: bind 
// class Button1 {
//     constructor(value){
//         this.value = value;
//         this.click = this.click.bind(this);
//     }
//     click(){
//         console.log("Giá trị là " + this.value);
//     }
// };
// let btn1 = new Button1("Ahihi");
// setTimeout(btn1.click, 3000);
/*
btn1{
    value: "Ahihi";
    click() đc độ có thêm this
    [[prototype]]: Button1.prototype => class Button1
                                        constructor
                                        click()
}
*/

//C3: dùng arrow
// class Button2 {
//     constructor(value){
//         this.value = value;
//     }
//     click= () => {
//         console.log("Giá trị là " + this.value);
//     };
// };
// let btn2 = new Button2("Ahihi");
// setTimeout(btn2.click, 3000);
//dùng arrow thì vô tình this sẽ bị đá ra và nó sẽ xác định là những thằng
//xung quanh nó và vô tình những tk xung quanh nó lại là btn2 

//II- class inheritance: kế thừa bằng class
//trước khi có class thì chúng ta chỉ có constructor function mà thôi
//việc kế thừa chắc chắn ko phải thông qua từ khóa "extends"(khóa rỗng)

//
class Animal{
    constructor(name){
        this.name = name;
        this.speed = 0;
    }
    //method
    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} stands still`);
    }
};

let ani = new Animal("Ahihi đồ chó");

class Rabbit extends Animal{
    constructor(name){
        super(name);//new Animal()
    }
    hide(){
        console.log(`${this.name} hides!!!`);
    }
    stop(){
        setTimeout(()=>{
            super.stop;
        },1000);
    }
}

let yellowRabbit = new Rabbit("yellowRabbit");
// yellowRabbit.hide();//
// yellowRabbit.run(6);
// yellowRabbit.stop();
//ani.hide();
/*
    yellowRabbit:{
        name:"yellowRabbit",
        speed: 0,
        [[prototype]]: Rabbit.prototype => class Animal
}
*/
console.log(yellowRabbit.__proto__);

//class field
class Animal2{
    name = "isAnimal";// class field
    constructor(){
        console.log(this.name);
    }
}

class Rabbit2 extends Animal2{
    name = "isRabbit";
    constructor(){
        super();
    }
}

let ani2 = new Animal2();//isAnimal
let rb2 = new Rabbit2();//isAnimal
//class field ko kế thừa, ko có override(mới đè lên cũ), chỉ có overWrite(ghi đè)
console.log(rb2);

//8 - static
// static: tĩnh
// trong java static nghĩa là prop thuộc về class, instance(các obj đc tạo từ class) 
//đc phép truy cập và sử dụng dùng chung 
//trong JS static nghĩa là prop "chỉ" thuộc về class, instance ko đc
//phép truy cập
class User9 {
    name = "Điệp";
    static name2 = "Lan";
}

let obj1 = new User9();
console.log(obj1.name);
console.log(obj1.name2);//undefined(nhưng java chạy đc)
console.log(User9.name2);

//--------------------
class Article {
    constructor(title, date){
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB){
        return articleA.date - articleB.date;
    }
};

//danh sách mấy bài báo lá cải
let articleList = [
    new Article("Hoài linh để quên 14 tỷ trong ngân hàng", new Date(2022,3,6)),
    new Article("Jack bán áo có chữ kí messi để từ thiện", new Date(2022,0,6)),
    new Article("Người mua áo messi dùng tiền để từ thiện cho trẻ mồ côi", new Date(2022,8,6)),
];

articleList.sort(Article.compare);
console.log(articleList);

//Access modifier : đây là đại diện của tính đóng gói trong OOP ở js

//trong js chỉ chia ra 2 là Internal và External interface
// Internal interface - phương thức và thuộc tính chỉ có thể được truy cập bên trong các phương thức trong class, không phải từ bên ngoài.(private)
// External interface - phương thức và thuộc tính có thể truy cập được từ ngoài và trong class.(public)
// Trong Javascript, có 2 loại thuộc tính và phương thức:

// Public: có thể truy cập từ bất kỳ đâu. Nghĩa là external interface. Cho đến bây giờ thì chúng ta chỉ sử dụng thuộc tính public
// Private: có thể truy cập bên trong class. Nghĩa là internal interface
// Trong nhiều ngôn ngữ khác thì còn tồn tại trường "protected": chỉ có thể truy cập bên trong class và những class kế thừa.

// Trường Protected không được quy định trong Javascript ở cấp độ ngôn ngữ, những trong thực tế để cho tiện lợi thì chúng ta có thể giả lập để quy ước với nhau.

//ReadOnly
//nếu khai báo get mà k có set, thì nó sẽ thành readOnly, không đổi giá trị đc
//nếu không có set/get thì nó tự tạo , sẽ gán bth
//các dev quy ước tên _ ở trước là private chỉ dùng trong class, nên truy cập bằng get/set
//không nên . tới
//việc quy ước này không đảm bảo được ngôn ngữ, chỉ là quy ước

class CoffeeMachine{
    constructor(power){
        this._power = power;
    }
    get power(){
        return this._power;
    }
}

let cfm = new CoffeeMachine(100);
cfm._power = 1000;//thoải mái(người ko thik là sếp)
console.log(cfm.power);

/////
class CoffeeMachine1{
    #power;//nguyên hệ thống bik là private,
    // ko đc sử dụng ở bên ngoài, sử dụng là lỗi
    constructor(power){
        this.#power = power;
    }
    get power(){
        return this.#power;
    }
}

let cfm1 = new CoffeeMachine1(100);
cfm1.power = 1000;
// cfm1.#power = 1000; //lỗi
console.log(cfm1.power);
