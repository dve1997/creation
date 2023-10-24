const postData = async (url, data) => {
  let res = await fetch(url, { method: "POST", body: data });

  return await res.text();
};

const getData = async (url) => {
  let res = await fetch(url);

  return await res.json();
};

export { postData, getData };
