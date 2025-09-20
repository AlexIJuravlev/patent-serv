const Todo = require("../models/Todo");

// add todo

async function addTodo(data) {
  const newTodo = await Todo.create(data);

  await newTodo.populate({
    path: "comment",
    populate: "author",
  });

  return newTodo;
}

// edit todo

function editTodo(todoId, todo){
    const newTodo = Todo.findByIdAndUpdate(todoId, todo, {
      returnDocument: "after",
    });

    return newTodo;
}

//delete todo

function deleteTodo(todoId){
    return Todo.deleteOne({_id: todoId});
}

//get list
async function getTodo() {
    return Todo.find()
}

//get items
async function getItems(userId) {
    return Todo.find({userId: userId})
}

//get items
async function getItem(userId, todoId) {
  return Todo.find({ userId: userId, _id: todoId }).populate({path:'comment', populate: 'author'});
}

module.exports = {
  addTodo,
  editTodo,
  deleteTodo,
  getTodo,
  getItems,
  getItem,
};
