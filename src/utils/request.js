/* eslint-disable */
function createUrl(action_name) {
  // Среда запуска
  const prd = "production";
  // Данные для теста
  const testRoutID = "6981707634135019405";
  const testPath = "https://agent-learn.vsk.ru/custom_web_template.html";
  const testServerID = "7150637520051639106";
  // Данные для прод
  const prodRoutID = "6955024497311033662";
  const prodPath = "/custom_web_template.html";
  const prodServerID = "7150637520051639106";
  // Задаем переменные согласно условиям запуска
  const routerId = process.env.NODE_ENV === prd ? prodRoutID : testRoutID;
  const serverId = process.env.NODE_ENV === prd ? prodServerID : testServerID;
  const basePath = process.env.NODE_ENV === prd ? prodPath : testPath;

  var _url = basePath
    .concat("?action_name=")
    .concat(action_name)
    .concat("&object_id=")
    .concat(routerId)
    .concat("&server_id=")
    .concat(serverId)
    .concat("&r=")
    .concat(Math.round(Math.random() * 10000));
  return encodeURI(_url);
}

const requestWt = (action_mame) => {
  let url = createUrl(action_mame);
  const response = (promise) => {
    return promise
      .then((r) => {
        return r.json();
      })
      .catch((err) => {
        console.log("-----error-------");
        console.log(err);
      });
  };
  return {
    get: (params) => {
      if (params) {
        url = url + "&" + new URLSearchParams(params).toString();
      }
      return response(
        fetch(url, {
          method: "GET",
          credentials: "include",
        })
      );
    },
    post: (data, params) => {
      if (params) {
        url = url + "&" + new URLSearchParams(params).toString();
      }
      return response(
        fetch(url, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(data),
        })
      );
    },
    form: (data, params) => {
      if (params) {
        url = url + "&" + new URLSearchParams(params).toString();
      }
      return response(
        fetch(url, {
          method: "POST",
          credentials: "include",
          body: data,
        })
      );
    },
  };
};

export { requestWt };
