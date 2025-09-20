const mongoose = require("mongoose");

const TodoScheme = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    deadline: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false
    },
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", TodoScheme);

module.exports = Todo;
