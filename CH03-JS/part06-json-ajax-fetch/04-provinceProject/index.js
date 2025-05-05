const baseURL = "https://provinces.open-api.vn/api";
//class + promise + fetch
//đảm nhận việc giao tiếp vs server
class Http {
  get(url) {
    return fetch(url).then((response) => {
      //kiểm tra kiện hàng
      if (response.ok) {
        return response.json(); //promise<data>
      } else {
        throw new Error(response.statusText);
      }
    }); //promise<data>
  } // ai gọi get thì sẽ đc //promise<data>
}

//Store đảm nhận việc trích xuất dữ liệu vs server
class Store {
  constructor() {
    this.http = new Http();
  }
  getProvinces() {
    //đường dẫn dể get đc Province
    return this.http.get(`${baseURL}/p`); //promise<provinces>
  } //promise<provinces>// ai gọi hàm này thì .then sẽ nhận đc

  getDistricts(provinceCode) {
    //lấy đc province info và trong đó có districts
    return this.http
      .get(`${baseURL}/p/${provinceCode}/?depth=2`)
      .then((provinceInfo) => {
        return provinceInfo.districts;
      }); // promise<districts>
  } // promise<districts>

  getWards(districtCode) {
    //lấy đc district info và trong đó có wards
    return this.http
      .get(`${baseURL}/d/${districtCode}/?depth=2`)
      .then((districtInfo) => {
        return districtInfo.wards;
      }); // promise <wards>
  } //promise </wards>
}

//RenderUI: render dữ liệu lên giao diện
class RenderUI {
  renderProvinces(provinces) {
    let htmlContent = provinces
      .map((provinceItem) => {
        const { code, name } = provinceItem;
        return `<option value="${code}">${name}</option>`;
      })
      .join("");
    document.querySelector("#province").innerHTML = htmlContent;
  }

  renderDistricts(districts) {
    let htmlContent = districts
      .map((districtItem) => {
        const { code, name } = districtItem;
        return `<option value="${code}">${name}</option>`;
      })
      .join("");
    document.querySelector("#district").innerHTML = htmlContent;
  }

  renderWards(wards) {
    let htmlContent = wards
      .map((wardItem) => {
        const { code, name } = wardItem;
        return `<option value="${code}">${name}</option>`;
      })
      .join("");
    document.querySelector("#ward").innerHTML = htmlContent;
  }

  renderInfomation(infomation) {
    let htmlContent = "";
    for (const key in infomation) {
      htmlContent += infomation[key] ? `,${infomation[key]}` : "";
    }
    htmlContent = htmlContent.slice(1);
    document.querySelector("#infomation").innerHTML = htmlContent;
  }
}

//sự kiện load trang
document.addEventListener("DOMContentLoaded", (event) => {
  let store = new Store();
  let ui = new RenderUI();
  //lấy danh sách province từ server và hiển thị
  store
    .getProvinces()
    .then((provinces) => {
      ui.renderProvinces(provinces);
      //lấy provinceCode của province hiện tại
      let provinceCode = document.querySelector("#province").value;
      //dùng provinceCode đi tìm danh sách các district của nó
      return store.getDistricts(provinceCode);
    })
    .then((districts) => {
      ui.renderDistricts(districts);
      //lấy districtCode của district hiện tại
      let districtCode = document.querySelector("#district").value;
      //dùng districtCode tìm danh sách ward và hiển thị
      return store.getWards(districtCode);
    })
    .then((wards) => {
      ui.renderWards(wards);
    });
});

//sự kiện thay đổi province // khi thay đổi thì sự kiện gì đó sẽ diễn ra
document.querySelector("#province").addEventListener("change", (event) => {
  let store = new Store();
  let ui = new RenderUI();
  //lấy mã provinceCode sau thay đổi
  let provinceCode = document.querySelector("#province").value;
  store
    .getDistricts(provinceCode)
    .then((districts) => {
      ui.renderDistricts(districts);
      //lấy districtCode của district hiện tại
      let districtCode = document.querySelector("#district").value;
      //dùng districtCode tìm danh sách ward và hiển thị
      return store.getWards(districtCode);
    })
    .then((wards) => {
      ui.renderWards(wards);
    });
});
/*
    nên tạo store và ui bên trong hàm vì khi hàm chạy thì store và ui mới đc tạo
    tạo ở ngoài thì sẽ tái sử dụng nhìu nhưng hiệu năng ko tốt và thừa, chiếm chỗ bộ nhớ
*/

//sự kiện thay đổi district
document.querySelector("#district").addEventListener("change", (event) => {
  let store = new Store();
  let ui = new RenderUI();
  //lấy districtCode vừa đổi
  let districtCode = document.querySelector("#district").value;
  store.getWards(districtCode).then((wards) => {
    ui.renderWards(wards);
  });
});

//sự kiện submit(bấm chuột vào nút đặt hàng | enter)
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let address = document.querySelector("#address").value;
  let province = document.querySelector("#province option:checked").innerHTML; //chỉ lấy dữ liệu trong option đã chọn
  let district = document.querySelector("#district option:checked").innerHTML;
  let ward = document.querySelector("#ward option:checked")?.innerHTML;
  let ui = new RenderUI();
  let infomation = {
    address,
    province,
    district,
    ward,
  };
  ui.renderInfomation(infomation);
});
