//03-loop.js
console.log("Bài 3: Loop - vòng lặp");
//reuse: dùng lại                 -  Repeat: lặp lại
//thích thì dùng, thời gian ko bị qui định(đại diện là hàm)
//lặp lại đều đặn liên tục đúng khoảng thời gian qui định(đại diện là loop)
//for | do-while | while

// đây là object phẳng(plain Object), đặc trưng là ko có chiều sâu
let student1 = {name: "Điệp", point: 10, major: "SE"};
//              property | entry
//              key : value
let array1 = [12,17,19];
//array > object > con trỏ
/*
    array1{
        0:12
        1:17
        2:19
    }
*/
//array vẫn có key: value như bth nhưng thay vì gọi là key
//thì người ta thường gọi là index

console.log(student1.name);//"Điệp"
console.log(student1["name"]);//"Điệp"
console.log(array1[1]);//17

//Bàn về các vòng for
//vòng for cơ bản
// for (let i = 0; i <= array.length; i++) 
//vòng for cơ bản sẽ duyệt từ start đến end theo nhu cầu khai báo của mik

//vòng for cải tiến: duyệt đến hết, ko vận hành bằng index
//for-in: duyệt các key của object 
for (const key in student1) {
    console.log(student1[key]);
    
}

//Set
let demoSet = new Set(["Điệp", "Huệ", "Lan", "Huệ"]);//Set là tập hợp loại trùng
console.log(demoSet);
//khi loại trùng thì các phần tử ko nằm vị trí index(key) ban đầu
//nên key lúc này vô dụng => set bỏ key luôn => set ko có key
for (const key in demoSet) {
    console.log(key);
}

//for-in với set sẽ ko đc gì cả, vì set ko có key , sao mà duyệt
//for-in, duyệt key,chê Set nhưng sẽ ko báo lỗi Set, nó sẽ hỉu set ko có key

//đa phần object đều có tính khả duyệt(iterable),
//tính khả duyệt(iterable): có khả năng tự duyệt, chạy từ đầu đến cuối, ko quan tâm có bao nhiu p.tử
//nhưng thường các object mà mình tự tạo ra nó ko có chìu sâu vì đa phần đều là Object phẳng đặc trưng là ko có chiều sâu
//for-of | fore ko duyệt bằng index và key, duyệt bằng iterable, chê object phẳng

//for-of duyệt value nhưng dùng iterable, và vì vậy nó chê object phẳng
// for (const val of student1) {
//     console.log(val);
    
// }

for (const val of array1) {
    console.log(val);//Set xài đc for-of vì có ko có key nhưng có value
    
}


//fore(method): duyệt val đi kèm key và dùng cơ chế iterable
//xử lí các lần lặp bằng callback
array1.forEach((val,key)=>{// forEach gọi là callback //hàm gọi lại bên trong là callbackfc
    console.log(val,key);
    
});
//forEach nhận vào 1 hàm khác để xử lí// callbackfc: 1 hàm đc gọi lại
/*
    forEach làm 2 việc:
        1.gọi iterable để xin val và key tiếp theo
        2.bỏ cặp val, key vào callbackfc để xử lí(callbackfc(val, key))
*/
demoSet.forEach((val,key)=>{
    console.log(val,key);
    
});
/*
    for-in: là duyệt key(chơi đc với mọi object)(để ý tk set)
    for-of: duyệt value bằng iterable(chê plain object=> báo lỗi)
    fore:   duyệt value kèm key bằng iterable(chê plain object=> báo lỗi)
*/
