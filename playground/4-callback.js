// setTimeout(() => {
// 	console.log('Two seconds are up!');
// }, 2000);

// const names = [ 'Andrew', 'jen', 'Jess' ];
// const shortNames = names.filter((name) => {
// 	return name.length <= 4;
// });

// // console.log(shortNames);
const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("This is my error!", undefined);
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((error, result) => {
  error ? console.log(error) : console.log(result);
});
