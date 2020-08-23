require("../src/db/mongoose");
const User = require("../src/models/user");
const Task = require("../src/models/task");

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  // get the count
  const count = await Task.countDocuments({ completed: false });
  return count;
};

// updateAgeAndCount("5f3821f666d6b53c6830840f", "2").then(console.log);
deleteTaskAndCount("5f381d8e9470c01114c9a64b").then(console.log);
