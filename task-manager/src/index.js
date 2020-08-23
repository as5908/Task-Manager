const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Under maintenance");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Servier is up on  port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");
const main = async () => {
  // find task by Id
  // const task = await Task.findById("5f41b824a882d00b54dc77b1");
  // await task.populate("owner").execPopulate();
  // console.log(task);

  // Find user by Id
  const user = await User.findById("5f41b7652fa68a4570d48a92");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};
main();
// const pet = {
//   name: "Hal",
// };

// pet.toJSON = function () {
//   console.log(this);
//   return {};
// };

// console.log(JSON.stringify(pet));
// const bcrypt = require("bcryptjs");
// const myFunction = async () => {
//   const password = "Red12345!";
//   const hashedPassword = await bcrypt.hash(password, 8); // 8 is number of rounds

//   console.log(password, hashedPassword);

//   const isMatch = await bcrypt.compare(
//     "Red12345!",
//     "$2a$08$w3kJYUewCwFKuT0QxXulruJrfJniEV32YoZF9uzecNUbGCJ7KWb6m"
//   );
//   console.log(isMatch);
// };

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "Secrettosign", {
//     expiresIn: "7 days",
//   });
//   console.log(token);

//   const verify = jwt.verify(token, "Secrettosign");
//   console.log(verify);
// };
// myFunction();
