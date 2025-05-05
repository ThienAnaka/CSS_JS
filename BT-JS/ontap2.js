
//Viết hàm nhận vào số nguyên dương n và return lại một mảng các ước số của nó
console.log("Viết hàm nhận vào số nguyên dương n và return lại một mảng các ước số của nó");

const uocso = (n) => {
    const result = []
    let i = 1
    while (i <= n) {
        if (n % i === 0) {
            result.push(i)
        }
        i++
    };
    return result;
}

console.log(uocso(99));

//Viết hàm nhận vào số nguyên dương n và return lại tổng tất cả ước số nguyên dương của nó
console.log("Viết hàm nhận vào số nguyên dương n và return lại tổng tất cả ước số nguyên dương của nó");

const tongUocSo = (n) => {
    let result = 0
    let i = 1
    while (i <= n) {
        if (n % i === 0) {
            result += i
        }
        i++
    }
    return result
}
console.log(tongUocSo(9));


//3. Viết hàm kiểm tra số nguyên dương n có phải số nguyên tố hay không
console.log("Viết hàm kiểm tra số nguyên dương n có phải số nguyên tố hay không");

const kiemTraSoNguyenTo = (n) => {
    if (n < 2) {
        return false
    }
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
console.log(kiemTraSoNguyenTo(97));


//4. Viết hàm tính tổng các chữ số của số nguyên dương n
console.log(" Viết hàm tính tổng các chữ số của số nguyên dương n");

const tinhTong = (n) => {
    let result = 0
    const string = String(n)
    for (const char of string) {
        result += Number(char)
    }
    return result
}
console.log(tinhTong(97));

// 5. Viết chương trình nhập tháng, năm.Hãy cho biết tháng đó có bao nhiêu ngày.Biết rằng năm nhuận là
// năm chia hết cho 400 hoặc chia hết cho 4 nhưng không chia hết cho 100.
console.log("Viết chương trình nhập tháng, năm.Hãy cho biết tháng đó có bao nhiêu ngày.Biết rằng năm nhuận là năm chia hết cho 400 hoặc chia hết cho 4 nhưng không chia hết cho 100.");

const demNgay = (thang, nam) => {
    const namNhuan = (nam) => {
        if (nam % 400 === 0) {
            return true
        }
        if (nam % 4 === 0 && nam % 100 !== 0) {
            return true
        }
        return false
    }
    if ([1, 3, 5, 7, 8, 10, 12].includes(thang)) {
        return 31
    } else if ([4, 6, 9, 11].includes(thang)) {
        return 30
    } else {
        if (namNhuan(nam)) {
            return 29
        }
        return 28
    }
}
console.log(demNgay(2,2023));


//6.Viết hàm in bảng cửu chương ra màn hình
console.log("Viết hàm in bảng cửu chương ra màn hình");

const inBanCuuChuong = () => {
    let result = ''
    for (let i = 1; i <= 9; i++) {
        if (i === 1) {
            result += `Bảng số ${i}`
        } else {
            result += `\nBảng số ${i}`
        }
        for (j = 1; j <= 10; j++) {
            result += `\n${i} x ${j} = ${i * j}`
        }
    }
    return result
}

console.log(inBanCuuChuong());

//7. Tìm số fibonacci thứ n
console.log("Tìm số fibonacci thứ n");

const fibonacci = (n) => {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(9));

//8. Tính tổng n số fibonacci đầu tiên
console.log("Tính tổng n số fibonacci đầu tiên");

const fibonacci1 = (n) => {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonacci1(n - 1) + fibonacci1(n - 2)
}
const sumFibo = (n) => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += fibonacci1(i)
    }
    return sum
}

console.log(fibonacci1(7));
