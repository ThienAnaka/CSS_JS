//01-propertyFlag-DescriptorProperty.js
//propertyFlag-DescriptorProperty-bộ cờ-bộ mô tả

/*
có 4 thuộc tính :
    value:giá trị của property
    writable: mặc định là true thì value có thể thay đổi
    vd: profile.fname = "Hung"
    còn nếu false thì sẽ ko thay đổi đc 
    enumerable: true thì có thể duyệt trong vòng lặp | false thì ko thể (khả năng nhìn)
    configurable: true thì prop có thể cập nhật các lá cờ
                  false thì ko thể cập nhật đc enumerable nữa
                  writable thì từ T -> F đc (F -> T thì ko đc)
                  value thì dựa vào writable
bất cứ property nào của object cũng đều sở hữu 4 lá cờ (1 bộ cờ)                  
và có tên là propertyFlag - property descriptor
*/
let profile = {
    fname: "Điệp",
    age: 18,
};
//1. ta có thể lấy ra bộ cờ của 1 property bất kì trong object
console.log(Object.getOwnPropertyDescriptor(profile,"fname"));
//{value: 'Điệp', writable: true, enumerable: true, configurable: true}
//2. Cập nhật / thêm 1 prop và bộ cờ của nó 
//2.1 Cập nhật bộ cờ của 1 property trong object
Object.defineProperty(profile, "fname", {
    writable: false,
});
profile.fname = "Hung";//có chạy nhưng ko có đổi giá trị
console.log(profile);
//2.2 Tạo mới thuộc tính kèm bộ cờ mô tả
Object.defineProperty(profile, "job", {
    value:"yangho",
    writable: true,
});//nếu dùng để tạo thì những lá cờ nào ko liệt kê là false
console.log(Object.getOwnPropertyDescriptor(profile,"job"));
//{value: 'yangho', writable: true, enumerable: false, configurable: false}
//và với enumerable là false thì chúng ta ko thể duyệt đc thuộc tính 
//này trong các vòng for
console.log(profile);
//dùng for in duyệt key
for (const key in profile) {
    console.log(key);
}//chỉ có fname và age vì job là enumerable false

//II - Non-configurable: ko thể cấu hình 
/*
configurable: false => nghĩa là ko cho ta set giá trị của bộ cờ
                ngoại trừ writable: T -> F
                value thì dựa vào writable 

người ta thường dùng configurable cho những prop đặc biệt như Math, PI              
khi đã configurable là false thì ko thể dùng defineProperty để fix
        configureable về true dc nữa
khi đã configurable: false thì:
    -1. ko thể thay đổi configurable nữa
    -2. ko thể thay đổi enumerable nữa
    -3. ko thể thay đổi writable F->T nữa (T->F thì đc)
    -4. value dựa vào writable
    -5. ko thể thay đổi đc getter và setter của accessor property
*/

//3. Ta có thể thêm/ cập nhật nhiều prop kèm bộ cờ cùng lúc
Object.defineProperties(profile,{
    point: {value: 9, writable: true},
    student_id: {value:"SE111", writable: true},
});
//ta có thể lấy tất cả các bộ cờ của các property trong Object
console.log(Object.getOwnPropertyDescriptors(profile));

//Làm sao để có thể clone đc một Object
//# ...phân rã: clone đc các prop bình thường, ko chép đc bộ cờ
let objClone = {...profile};
console.log(Object.getOwnPropertyDescriptors(profile));

//clone thông qua việc định nghĩa 
objClone = Object.defineProperties(
    {},
    Object.getOwnPropertyDescriptors(profile)
);
console.log(Object.getOwnPropertyDescriptors(objClone));

//Sealing an object globally - niêm phong toàn bộ 1 object
//      những thằng này rất ít dùng trong dự án nhưng cũng rất là nhanh tiện
// Object.preventExtensions(obj)
//      Ngăn cấm thêm thuộc tính mới vào object
//      muốn biết 1 object có đang preventExtensions không  ta dùng Object.isExtensible(object)

// Object.seal(obj)
//      Ngăn cấm thêm mới/xóa thuộc tính object
//      set configurable : false cho tất cả các pro
//      muốn biết 1 object có đang seal không ta dùng Object.isSealed(object)

// Object.freeze(obj)
//      Ngăn cấm thêm mới/xóa/thay đổi thuộc tính object
//      set configurable : false và writable: false cho tất cả các pro
//      muốn biết 1 object có đang freeze không  ta dùng Object.isFrozen(object) 

//--------------------------------
//trong object có 2 loại property 
//value property, accessor property
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
console.log(student.fullname);
student.fullname = "Trà Long";
console.log(student);
//lastName: value   writable    enumerable  configutable
//fullname: get     set         enumerable  configutable
console.log(Object.getOwnPropertyDescriptor(student, "fullname"));

//III - getter và setter thông minh ứng dụng từ accessor property
//vd: cấm người code set giá trị có độ dài bé hơn 4
student = {
    get fname() {
        return this._fname;
    },

    set fname(newName){
        if (newName.length < 4) {
            alert("Name is too short");
            return;
        }else{
            this._fname = newName;
        }
    },
};
student.fname = "Toàn";
console.log(student.fname);


