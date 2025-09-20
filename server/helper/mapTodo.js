const mongoose = require("mongoose");
const mapComment = require("./mapComment");

module.exports = function (todo) {
  return {
    id: todo._id,
    title: todo.title,
    deadline: todo.deadline,
    content: todo.content,
    userId: todo.userId,
    comment: todo.comment.map((comment) =>
      mongoose.isObjectIdOrHexString(comment) ? comment : mapComment(comment)
    ),
    publishedAt: todo.createdAt,
    done: todo.done,
  };
};
