//03-async-await.js
//ngày xưa, người ta dùng callback để xử lí bất đồng bộ, dễ bị callback hell
//ES6: ngta dùng promise để khắc phục callback hell
//ES7: func Async await dùng để kết hợp với promise
//giảm tải việc dùng .then .catch 

//func Async là 1 hàm return về 1 promise

new Promise((resolve, reject) => {
    resolve("ahihi"); 
});

function handle(){
    return Promise.resolve("ahihi"); // tương đương vs tạo new                                      
}

async function handle() {
    return "ahihi";//return Promise.resolve("ahihi");
}

//Await là: đợi 1 xíu 
//mô phỏng việc lên database và lấy profile từ server về
//ép server phải hứa rằng sau 3s thì đưa cho mình Profile
let getProfile = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Điệp", age: 25 });
        }, 3000);
    });
};

let getArticle = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["hoàng tử bé", "Mèo dạy hải âu bay", "Cây cam ngọt của tôi"]);
        }, 2000);
    });
};
//cách 1: nguyên nhân kết quả 5s
// let getData = async () => {
//     //muốn bắt lỗi thì dùng try-catch
//     let profile = await getProfile();// lấy getProfile ra chạy, vì nó là 1 lời hứa nên sẽ đợi.Đợi xong thì sẽ thu đc profile
//     let article = await getArticle();// lấy getArticle ra chạy, vì nó là 1 lời hứa nên sẽ đợi.Đợi xong thì sẽ thu đc article
//     console.log(profile,article);
// };
// getData();

/* 
    **Promise nhược điểm là .then, .catch nhìu quá nhưng cũng là
    1 ưu điểm vì nó bắt lỗi đc // có thể .nhìu then và .1 catch ở cuối sẽ gom lỗi về 1 chỗ 
                                        duy nhất

    **Còn async await nhược điểm là ko bắt lỗi đc/ko có hàm bắt lỗi cụ thể
     nên phải xài try catch 
    ưu điểm là ko phải là ko phải .then, .catch quá nhìu
*/ 

//cách 2: độc lập 3s
let getData = async () => {
    const [profile, article] = await Promise.all([getProfile(), getArticle()]);
    //dùng phân rã thành 2 biến                     [profile, article]
    console.log(profile,article);
};
getData();

//I - Xử lí lỗi
let getStudents = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject("lỗi kinh hoàng")
        },3000); 
    });
};

//xử lí bằng promise
// getStudents().then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// });

//xử lí bằng async await thì sao?
// let handle3 = async () => {
//     try{
//     let student = await getStudents();
//     console.log(student);
//     }catch(error){
//         console.log(error);
//     }
// };
// handle3();

// (async () => {
//     try{
//     let student = await getStudents();
//     console.log(student);
//     }catch(error){
//         console.log(error);
//     }
// })();


//đừng bao giờ dùng async với các toán tử đồng bộ
//vd:
let x = 0;
let handle4 = async ()=>{
    x += 1;
    console.log(x);
    return 5;// return Promise.resolve(5)
};

let handle5 = async ()=>{
    //thấy await là ko có cộng trừ nhân chia, làm là sai
     let tmp = await handle4();
     x += tmp;
     console.log(x);
}
handle5();
