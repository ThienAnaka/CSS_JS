//runtimeError : lỗi khi vận hành | do người dùng
//syntaxError  : lỗi sai cú pháp  | do người code
//logicError   : lỗi sai tư duy   | do người code

//tryCatch: dùng để xử lí lỗi phát sinh trong runtimeError
//nhớ rằng tryCatch ko vận hành trong syntaxError
//**Try catch chỉ hoạt động trong môi trường đồng bộ mà thôi


//JS đc xem là đơn luồng, nếu chạy trên nền tảng web thì là đa luồng 

//đồng bộ
// 
// try {
//     diepPiedTeam;
//     console.log("hello"); 
// } catch (error) {
//     console.log(error);
    
// }


//bất đồng bộ 
//try catch ko có đợi, thằng nào chạy lâu quá sẽ đợi sang 1 bên 
//      và try catch sẽ chạy tiếp những tk dưới
// try {
//     setTimeout(() => {
//         diepPiedTeam;//lỗi
//     }, 1000);
//     console.log("hello");
    
// } catch (error) {
//     console.log(error);
    
// }



//nên code như thế này 
// setTimeout(() => {
//     try {
//         diepPiedTeam;//lỗi    
//         console.log("hello");

//     } catch (error) {
//         console.log(error);
//     }
// }, 1000);




//CH06: promise.then.catch

//Cấu trúc của 1 Error trông như thế nào
//vì mik làm backend nên mik phải xử lí lỗi rất nhìu
//  xử lí lỗi: "làm cho lỗi tường minh, dễ nhìn"
//              giấu đi những thông tin nhạy cảm

// gõ thử "new Error" và ctrl + click xem trong đó có gì 


try {
    diepPiedTeam;
    console.log("hello"); 
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

//flow:
//  stack là prop mà mik ko muốn người dùng nhìn thấy nhất, chỉ nên đưa name || message
// flow1: omit stack
// Error:               newError
// name                  name
// message ------->      message
// stack


//flow2: custom Error
//Error:            ErrorWithStatus extends Error
// name                  status
// message ------->      message
// stack

//mik có thể tự điều hướng về catch thông qua lệnh throw
let money = 9999999999999999;//15 số 9
try{
    if (money > 999999999999999) {
        throw new RangeError("số quá lớn với sức chứa");
    }
    console.log(money);
}catch(error){
    console.log(error);
}

// EvalError():     tạo 1 instance đại diện cho một lỗi xảy ra liên quan đến hàm toàn cục Eval()
// InternalError(): tạo 1 instance đại diện cho một lỗi xảy ra khi 1 lỗi bên trong jsEngine
//                  được ném. vd: quá nhiều đệ quy
// RangeError()   : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến số hoặc tham chiếu
//                  nằm ngoài phạm vi hợp lệ của nó
// ReferenceError : tạo 1 instance đại diện cho một lỗi xảy ra khi hủy tham chiếu của 1 tham chiếu
//                  không hợp lệ
// SyntaxError    : tạo 1 instance đại diện cho một lỗi xảy ra trong khi phân tích cú pháp
//                                                                          mã trong Eval()
// TypeError      : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến hoặc 1 tham số
//                  có kiểu không hợp lệ
// URIError       : tạo 1 instance đại diện cho một lỗi xảy ra khi encodeURI() hoặc decodeURI()
//                  truyền các tham số không hợp lệ

//finally
// loading = true;
// try {
//     getData();
//     loading = false
// } catch (error) {
//     loading = true;
// }finally{
//     loading = false;
// }

//tạo ra 1 dạng lỗi mới
class ErrorWithStatus extends Error{
    constructor({status, message}){
        super(message);
        this.status = status;
    }
}

try {
    throw new Error("Tôi bị hack rồi");
} catch (error) {
    let newError = new ErrorWithStatus({
        status:401,
        message: "Mày là tk gà",
    });
    console.log(newError);
}