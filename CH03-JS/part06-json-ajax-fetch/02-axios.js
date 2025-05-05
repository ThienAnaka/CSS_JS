//02-axios.js
//Axios là 1 HTTP client hỗ trợ gửi request và nhận response từ server
//là 1 thư viện tương tác vs API như get, post, put, delete
//axios ko có sẵn trong trình duyệt như fetch (phải cài đặt)
const baseURL = "https://66fd4470c3a184a84d19c13d.mockapi.io";
//dùng axios request yêu cầu server thêm mới 1 user vào users

// axios({
//   method: "POST",
//   url: `${baseURL}/users`,
//   data: { name: "Điệp nguyên tử" },
// })
//   .then((response) => {
//     //nhận kiện và kiểm tra
//     console.log(response);
//     if ([200, 201].includes(response.status)) {
//       //chưa bik
//       return response.data;
//     } else {
//       throw new Error(response.statusText);
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//aliases của post
// axios
//   .post(`${baseURL}/users`, { name: "Điệp nguyên tử 1" })
//   .then((response) => {
//     //nhận kiện và kiểm tra
//     console.log(response);
//     if ([200, 201].includes(response.status)) {
//       //chưa bik
//       return response.data;
//     } else {
//       throw new Error(response.statusText);
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Axios config
//class + axios + instance + interceptors
//cách để cấu hình axios
class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: baseURL,
      timeout: 10000, //10s thì cancel request
      headers: {
        "Content-Type": "application/json",
      },
    });
    //setup bộ đón chặn response cho instance của a
    this.instance.interceptors.response.use(
      //nếu thành công
      (response) => {
        return {
          status: response.status,
          data: response.data,
        };
      },
      //nếu thất bại thì trả ra Promise để xử lí
      (response) => {
        return Promise.reject({
          status: response.status,
          message: response.statusText,
        });
      }
    );
  }
}

//test
let http = new Http().instance;
http.get("users").then((response) => console.log(response));
