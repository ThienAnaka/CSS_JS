//01-asynchronous-callback.js
//bản thân js là 1 ngôn ngữ đơn luồng
//nhưng js runtime (environment) gồm có web browser và nodejs
// JS ENGINE V8

//PhP và Java là đa luồng

//synchronous: đồng bộ
// anh có 2 tác vụ L1(3s) và L2(2s)
//để hoàn thành L1 và L2 => 5s
//nếu L1 và L2 có mối quan hệ nguyên nhân kết quả thì hợp lí 

//nhưng nếu L1 và L2 là 2 nhiệm vụ độc lập
//thì thật sự ko cần phải chờ làm gì, mạnh ai nấy chạy cho khỏe
//tổng mất 3s
//asynchronous: bất đồng bộ

//trong js thì luôn là bất đồng bộ

//xử lí bất đồng bộ: đoạn nào cần đợi thì mik chỉnh về đồng bộ

//call stack:là 1 cấu trúc dữ liệu dạng ngăn xếp(stack)
//LIFO(last in first out)
function a(x){
    console.log(x);
}

function b(y){
    a( y + 2);
}

function c(z){
    b (z + 1);
}
c(5);

//khi c(5) chạy
//c(5) => z = 5
//c(5) => b(z + 1) => z + 1
//c(5) => b(z + 1) => y = z + 1
//c(5) => b(z + 1) => a( y + 2) => y + 2
//c(5) => b(z + 1) => a( y + 2) => x = y + 2
//c(5) => b(z + 1) => a( y + 2) => log(x)

//Event Loop và callback queue(kiu)
//trong 1 js runtime(môi trường chạy js) còn nhìu vùng nhớ nữa
//tổng thể js có gì ?
//về vùng nhớ: memory heap              callstack

//Event Loop: liên tục lặp đi lặp lại đợi 1 sự kiện "click, submit, ..."
                                                // callback queue
//web APIS: DOM | AJAS(XMLHttRequest) | timeOut 
//loupe: web test stack
function main(){
    console.log("command1");
    setTimeout( function(){
        console.log("command2");
    }, 10000);

    console.log("command3");

    setTimeout(function(){
        console.log("command4");
    },1000);
}
main();
//command1
//command3
//command4
//command2

//JS luôn bất đồng bộ
//nhưng đôi khi em rất cần đồng bộ: callback

//ưu điểm: dễ code
//nhược điểm: nhìu bug khó fix, callback hell

//sau này có Promise để cải thiện callback trong việc xử lí bất đồng bộ

for(var i = 0; i<= 3; i++){
    setTimeout(()=>{
        console.log(i);
    },4000);
}
//var là toàn cục,khi kết thúc vòng lặp thì sẽ gán biến i vào var và sử dụng nó luôn

setTimeout(() => {
    try {
        throw new Error("Lỗi chà bá");

    } catch (error) {
        console.log(error);
    }
}, 2000);