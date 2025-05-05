console.log("07-arrayMethod-objectMethod.js");
//mảng trong js ko nhất thiết phải cùng kiểu
let arr1 = [1,2,"a",{lname: "Huệ", age: 10}, [3, 5]];
console.log(arr1);

//2. length cung cấp độ dài 
console.log(arr1.length);
//3.Array.isArray(arr): kiểm tra xem biến arr có phải là array ko?
console.log(Array.isArray(arr1));//true
console.log(arr1 instanceof Array);//true

//4.toString(): biến mảng thành chuỗi kèm ','
let workerList = ["Huệ", "Lan", "Trà"];
console.log(workerList.toString());//Huệ,Lan,Trà

//5.split(token) | join(token)

//II. chèn mảng
//Array là mutable: có các method có khả năng chỉnh sửa object
//6. push(item): nhét item vào cuối của mảng | return new length
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.push("Cúc");
console.log(workerList, result);// ['Huệ', 'Lan', 'Trà', 'Cúc'] 4 

//7.unshift(item): nhét item vào đầu của mảng | return new length
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.unshift("Cúc");
console.log(workerList, result);//['Cúc', 'Huệ', 'Lan', 'Trà'] 4

//8.pop(): xóa pt ở cuối mảng | return pt đã xóa
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.pop();
console.log(workerList, result);// ['Huệ', 'Lan'] 'Trà'

//9. .shift(): xóa pt ở đầu mảng | return pt đã xóa
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.shift();
console.log(workerList, result);// ['Lan', 'Trà'] 'Huệ'

//10. delete array[index]: xóa pt ở vị trí index(cùi)
workerList = ["Huệ", "Lan", "Trà"];
delete workerList[1];// ['Huệ', empty, 'Trà']
console.log(workerList[1]);// undefined

//11. splice(start, length, ......pt muốn thêm)
//từ start: - xóa số lượng length pt
//          - nhét vào các pt muốn thêm
// return mảng các p.tử bị xóa 
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.splice(1, 0, "Điệp", "Cường");
//***Ở vị trí số 1, ko xóa ai hết mà thêm vào "Điệp", "Cường"
console.log(workerList, result);//  ['Huệ', 'Điệp', 'Cường', 'Lan', 'Trà'] []

//xóa mà ko thêm
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.splice(0, 1);
console.log(workerList, result);// ['Lan', 'Trà'] ['Huệ']

//vừa xóa vừa thêm
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.splice(0, 2, "Điệp", "Cường");
console.log(workerList, result);//  ['Điệp', 'Cường', 'Trà'] (2) ['Huệ', 'Lan']

//12.slice(start, end): chiết xuất chuỗi con từ start đến end - 1

//13. concat(...array): nối mảng
workerGirl = ["Huệ", "Lan", "Tân"];
workerBoy = ["Điệp", ["Cường", "Hùng"]];
workerList = workerGirl.concat(workerBoy, "Hồng", ["Trúc", "Lâm"]);
// do ["Cường", "Hùng"] có 2 lớp [] nên nó ko bị xóa [] đi
//          còn ["Trúc", "Lâm"] chỉ có 1 lớp [] nên nó bị xóa 
// *****Nchung là chỉ có thể bóc 1 lớp nếu 2 lớp thì vẫn sẽ còn mảng
console.log(workerList);//['Huệ', 'Lan', 'Tân', 'Điệp', ["Cường", "Hùng"], 'Hồng', 'Trúc', 'Lâm']
workerBoy[1][0] = "Tuấn";
console.log(workerList);
//shallow: sao chép nông
//sao chép giá trị nhưng ko cắt đc hết dây mơ rễ má

//14.spread operator: destructuring | phân rả mảng | object | ...
workerList = [...workerGirl, ...workerBoy];// shallow
workerList[4] = [...workerList[4]];//deep copy
console.log(workerBoy[1] == workerList[4]);//false
console.log(workerList);

//15. .forEach(cf): lập mảng
//cf: (val, index, arr) => {}
arr1 = ["Huệ", "Cúc", "Hồng"];
arr1.forEach((item, key, array) => {
    console.log(item, key, array);
});
console.log(arr1);

//16. ***QUAN TRỌNG
//      map(cf): biến đổi từng pt theo 1 công thức
//  cf: (val, index, array) => {}
arr1 = [2,6,9];

result = arr1.map((item) =>{
    return item + 2;
});

console.log(arr1);// [2, 6, 9]
console.log(result);//[4, 8, 11]

//17. filter(cf):hàm duyệt qua các item, item nào bỏ vào cf đc true
//                  thì giữ lại, trả về mảng sau khi đc lọc
//  cf: (item) => true(giữ) | false(bỏ)
arr1 = [1,2,3,4,5,6];
arr1 = arr1.filter((item) =>{
    return item % 2 == 0;
});
console.log(arr1);// [2,4,6]

//18. find(cf):hàm duyệt các item, tìm item đầu tiên mà bỏ vào cf
//          đc true thì lấy
//cf:(val, key, array) => {} : true|false
arr1 = [1,2,3,4,5,6];
result = arr1.find((item) =>{
    return item % 3 == 2;
});
console.log(result);

//19. findIndex(cf):hàm duyệt các item, tìm item đầu tiên mà bỏ vào cf
//          đc true thì lấy index(trả về vị trí)
//cf:(val, key, array) => {} : true|false
arr1 = [1,2,3,4,5,6];
result = arr1.findIndex((item) =>{
    return item % 3 == 2;
});
console.log(result);// 1

//20. indexOf(value): tìm vị trí của value nằm đâu trong mảng
arr1 = [3,5,9,2,0];
console.log(arr1.indexOf(9));// 2 

//filter(cf): lọc các item thỏa cf => item[]
//find(cf): lọc các item thỏa cf => item
//findIndex(cf): lọc các item thỏa cf => index của item đó
//indexOf(val): tìm val trong mảng => index của val đó

//21. every(cf):giống All trong DBI
// cf: (val, key, array) => {}: true|false
// duyệt qua các item, nếu tất cả các item đi qua cf để đc true
//      thì every mới return true

arr1 = [1,2,3,4,5,6];
result = arr1.every((item) =>{
    return item % 3 == 2;
});
console.log(result);// false

arr1 = [1,2,3,4,5,6];
result = arr1.every((item) =>{
    return item >= 1;
});
console.log(result);// true

//22. some(cf): giống như In trong DBI
//          chỉ cần 1 p.tử thỏa cf thì cả some là true
arr1 = [1,2,3,4,5,6];
result = arr1.some((item) =>{
    return item % 3 == 2;
});
console.log(result);// true

//23. include(val): tìm xem val có tồn tại trong mảng ko
//2 có nằm trong tập hợp đó ko
console.log([1,3,5,7,8,10,12].includes(2));

//24. reverse(cf?)

//25. sort(cf ? có cũn đc ko thì thoi): sắp xếp 
//1.string 
arr1 = ["Điệp", "An", "Bụp"];
arr1.sort();
console.log(arr1);

//2.number
arr1 = [1, 3, 20, 100];
arr1.sort();
console.log(arr1);// [1, 100, 20, 3]
//mik phải dạy nó
arr1 = [1, 3, 20, 100];
arr1.sort((a, b) =>{
    return a - b;
});
console.log(arr1);

//25. ****Reduce(cf, initial)
// cf:(total, current (item - val), current (index - key)) => {}
//  nếu map dùng để thay đổi các pt trong mảng theo 1 công thức
// reduce có khả năng biến đổi các pt và dồn hết về 1 biến

arr1 = [1, 3, 20, 100];

result = arr1.reduce((total, item) => {
    return (total += item + 2);
}, 0);
console.log(result);

//ứng dụng
let productList =[
    {proName : "xe", desc: "audi"},
    {proName : "nhà", desc: "biệt thự"},
    {proName : "người yêu", desc: "ngọc trinh"},
];

let content = productList.reduce((total, product) => {
    return total + `<h1>${product.proName}</h1> <p>${product.desc}</p>`;
}, "");
console.log(content);

document.querySelector(".demoReduce").innerHTML = content;

//** ko cần quan tâm: dùng reduce biến array thành object
arr1 = ["Điệp", 10, 22];
newObject = arr1.reduce((total, val, key) => {
    total[key] = val;
    return total;
}, {});
console.log(newObject);


//Object method:
//Entry của object gồm key: val
//key thì luôn là string number
//val: object | number | string | function

let worker1 = {
    lname: "Điệp 10 điểm",
    age: 25,
    showInfor(){
        console.log(this.lname + " " + this.age);      
    },
};
worker1.showInfor();

//thêm thuộc tính
worker1.point = 10;
worker1["point"] = 10;

//update prop 
worker1.lname = "Điệp đẹp trai";
//xóa prop
delete worker1.age;
console.log(worker1);   

//Object assign()
//  giống concat thay vì là nối, thì nó merge object
//  có rồi thì ghi đè, chưa thì thêm

let person1 = {
    lname: "Điệp",
    age: 25,
    job: ["yangho", "coder"],
};

let person2 = {
    lname: "Lan",
    age: 24,
    company: "PiedTeam",
};

// Object.assign(person1, person2);
console.log(person1);

//tất nhiên trên thực tế thì a ko thik dùng cái này
//ưu tiên dùng spread
person3 = {...person1, ...person2};
console.log(person1);
console.log(person3);
person3.job = {...person3.job};
console.log(person1.job == person3.job);

console.log(Object.keys(person3));
console.log(Object.values(person3));
console.log(Object.entries(person3));
//for-in: duyệt key của object chê set




let arr = [1,2,3,4,5];
let ahi = arr.filter((item) =>{
    return item %3 == 2;
});

let check = arr.every((item) =>{
    return item > 0;
});

let check1 = arr.some((item) =>{
    return item > 5;
});

let product=[
    {id:"p1", name: "quần 1", price: 120000, quanti: 12},
    {id:"p2", name: "áo 1", price: 140000, quanti: 5},
    {id:"p3", name: "quần 3", price: 160000, quanti: 6},
    {id:"p4", name: "áo 4", price: 130000, quanti: 3},
];
let newresult = product.filter((item)=>{
    return !item.name.includes("áo") && item.price > 130000;
});
console.log(newresult);

//thêm cho mỗi product trong ds product thuộc tính discountPrice
//là tiền gốc giảm 15%
product.forEach((product)=>{
    product.discountPrice = product.price / 0.15 ;
    
});
console.log(product);

//biến từng pt trong product thành chuỗi các dạng 
//sản phẩm quần đang có giá là 130000
let res = product.map((product)=>{
    return `Sản phẩm ${product.name} đang có giá là ${product.price}`;
});
console.log(res);

//biến từng pt trong product thành chuỗi nhỏ 
//các dạng `Sản phẩm ${product.name} đang có giá là ${product.price}`
//đc biến đổi từ các product
let product1=[
    {id:"p1", name: "quần 1", price: 120000, quanti: 12},
    {id:"p2", name: "áo 1", price: 140000, quanti: 5},
    {id:"p3", name: "quần 3", price: 160000, quanti: 6},
    {id:"p4", name: "áo 4", price: 130000, quanti: 3},
];

let ret = product1.reduce((total,product1)=>{
    return total + `Sản phẩm ${product1.name} đang có giá là ${product1.price} `+ ",";
}, "");
console.log(ret);
