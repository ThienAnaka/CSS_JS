const baseURL = "https://66fd4470c3a184a84d19c13d.mockapi.io/users";
//class + Async await + fetch
class FastHttp {
  async send(method, url, body) {
    let response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
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
(async () => {
  try {
    let data = await http.put(`${baseURL}/2`, { name: "ahihi đồ chó" });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();
