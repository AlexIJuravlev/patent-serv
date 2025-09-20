const Comment = require('../models/Comment')
const Todo = require('../models/Todo')

// add comment

async function addComment(todoId, comment) {
    const newComment = await Comment.create(comment)

    await Todo.findByIdAndUpdate( {_id:todoId}, {$push: {comment: newComment}})

    await newComment.populate('author')

    return newComment
}

// delete comment

async function deleteComment(todoId, commentId) {
  await Comment.deleteOne({ _id: commentId });

  await Todo.findByIdAndUpdate(todoId, { $pull: { comment: commentId } });
}

module.exports = {
    addComment, 
    deleteComment
}