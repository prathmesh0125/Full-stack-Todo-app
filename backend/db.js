const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/todo-app")
  .then(console.log("database is connected succefully!"));

const todoschema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const todo=mongoose.model("todos",todoschema)

module.exports={todo}