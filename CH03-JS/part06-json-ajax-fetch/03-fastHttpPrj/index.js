const baseURL = "https://66fd4470c3a184a84d19c13d.mockapi.io/users";
//class + Promise + fetch
class FastHttp {
  send(method, url, body) {
    return fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    }).then((response) => {
      if (response.ok) {
        return response.json(); //promise<data>
      } else {
        throw new Error(response.statusText);
      }
    });
  }

  get(url) {
    return this.send("GET", url, null);
  }
  delete(url) {
    return this.send("DELETE", url, null);
  }
  post(url, body) {
    return this.send("POST", url, body);
  }
  put(url, body) {
    return this.send("PUT", url, body);
  }
}

//test
//tạo bản thể của fastHttp để xài các method của nó
let http = new FastHttp();
// http.get(baseURL).then((data) => {});
http.put(`${baseURL}/2`, { name: "ahihi đồ chó" }).then((data) => {
  console.log(data);
});
