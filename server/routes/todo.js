const express = require("express");
const mapTodo = require("../helper/mapTodo");
const mapComment = require("../helper/mapComment");
const {
  addTodo,
  editTodo,
  deleteTodo,
  getTodo,
  getItems,
  getItem,
} = require("../controllers/todo");
const { addComment, deleteComment } = require("../controllers/comment");
const hasRole = require("../middlewares/hasRole");
const ROLES = require("../contants/roles");
const auth = require("../middlewares/auth");

const router = express.Router({ mergeParams: true });

router.post(
  "/",
  auth,
  hasRole([ROLES.ADMIN, ROLES.MODERATOR]),
  async (req, res) => {
    try {
      const newTodo = await addTodo({
        title: req.body.title,
        content: req.body.content,
        deadline: req.body.deadline,
        userId: req.body.userId,
      });
      res.send({ todo: mapTodo(newTodo) });
    } catch (e) {
      res.send({ error: e.message });
    }
  }
);

router.patch(
  "/:userId/:todoId/",
  auth,
  hasRole([ROLES.ADMIN, ROLES.MODERATOR, ROLES.READ]),
  async (req, res) => {
    const { userId, todoId } = req.params;
    try {
      const newTodo = await editTodo(todoId, {
        title: req.body.title,
        content: req.body.content,
        deadline: req.body.deadline,
        userId: req.body.userId,
        done: req.body.done,
      });
      res.send({ todo: mapTodo(newTodo) });
    } catch (e) {
      res.send({ error: e.message });
    }
  }
);

router.delete(
  "/:userId/:todoId/",
  auth,
  hasRole([ROLES.ADMIN, ROLES.MODERATOR, ROLES.READ]),
  async (req, res) => {
    const {userId, todoId} = req.params
    try {
      await deleteTodo(todoId);
      res.send({ error: null });
    } catch (e) {
      res.send({ error: e.message || "Непредвиденная ошибка " });
    }
  }
);

router.get(
  "/",
  auth,
  hasRole([ROLES.ADMIN, ROLES.MODERATOR, ROLES.READ]),
  async (req, res) => {
    try {
      const allTodo = await getTodo();
      res.send({ todo: allTodo.map(mapTodo) });
    } catch (e) {
      res.send({ error: e.message || "Непредвиденная ошибка " });
    }
  }
);

router.get(
  "/:userId",
  auth,
  hasRole([ROLES.ADMIN, ROLES.MODERATOR, ROLES.READ]),
  async (req, res) => {
    try {
      const todo = await getItems(req.params.userId);
      res.send({ todo: todo.map(mapTodo) });
    } catch (e) {
      res.send({ error: e.message || "Непредвиденная ошибка " });
    }
  }
);

router.get(
  "/:userId/:todoId",
  auth,
  hasRole([ROLES.ADMIN, ROLES.MODERATOR, ROLES.READ]),
  async (req, res) => {
    try {
      const { userId, todoId } = req.params;
      const todo = await getItem(userId, todoId);

      res.send({ todo: todo.map(mapTodo) });
    } catch (e) {
      res.send({ error: e.message || "Непредвиденная ошибка " });
    }
  }
);

router.post(
  "/:userId/:todoId/comment",
  auth,
  hasRole([ROLES.ADMIN, ROLES.MODERATOR, ROLES.READ]),
  async (req, res) => {
    const { userId, todoId } = req.params;
    try {
      const newComment = await addComment(todoId, {
        content: req.body.content,
        author: req.user.id,
      });

      res.send({ data: mapComment(newComment) });
    } catch (e) {
      res.send({
        error: e.message || "Непредвиденная ошибка ",
      });
    }
  }
);

router.delete(
  "/:userId/:todoId/comment/:commentId",
  auth,
  hasRole([ROLES.ADMIN, ROLES.MODERATOR]),
  async (req, res) => {
    const {userId, todoId, commentId} = req.params
    try {
      await deleteComment(todoId, commentId);
      res.send({ deletedCommentId: commentId });
    } catch (e) {
      res.send({ error: e.message || "Непредвиденная ошибка " });
    }
  }
);

module.exports = router;
