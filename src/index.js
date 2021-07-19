fetchData1 = (status) => {
  return new Promise((resolve, reject) => {
    if (status === 200) {
      resolve("1. Data fetch sucess");
    } else {
      reject("1. Data fetch fail");
    }
  });
};

fetchData2 = (status) => {
  return new Promise((resolve, reject) => {
    if (status === 200) {
      resolve("2. Data fetch sucess");
    } else {
      reject("2. Data fetch fail");
    }
  });
};

fetchData1(200)
  .then((resolveMsg) => {
    console.log(resolveMsg);
    return fetchData2(200);
  })
  .then((resolveMsg) => {
    console.log(resolveMsg);
  })
  .catch((err) => console.log(err));
