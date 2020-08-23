const mongoose = require("mongoose");
const validator = require("validator");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager-api";

mongoose.connect(`${connectionURL}/${databaseName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// 1- Define Model

// 2 -Create instance of Model
// const me = new User({
//   name: " Abhinav ",
//   email: "MYEMAIL@gmail.com",
//   password: "Password123    ",
// });

// // 3- Save instance
// me.save().then(console.log).catch(console.log);

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const task1 = new Task({
//   description: " Eat lunch ",
// });
// task1.save().then(console.log).catch(console.log);
