const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("promise is consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 is resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "yuvraj", uid: "21bcs4493" });
    } else {
      reject("ERROR Something went wrong");
    }
  }, 1000);
});
promiseThree
  .then((user) => {
    console.log(user);
    return user;
  })
  .then((user) => {
    console.log(user.uid);
  })
  .then((user) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise is either resolve or rejected ");
  });
