const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Things went wrong");
    // resolve([1, 4, 7]);
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log("Success!", result);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
