const express = require("express");
const {
  getUsers,
  getRoles,
  editUser,
  deleteUser,
} = require("../controllers/user");
const hasRole = require("../middlewares/hasRole");
const auth = require("../middlewares/auth");
const mapUser = require("../helper/mapUser");
const ROLES = require("../contants/roles");

const router = express.Router({ mergeParams: true });

router.get("/", auth, hasRole([ROLES.ADMIN, ROLES.MODERATOR]), async (req, res) => {
  const users = await getUsers();

  res.send({ data: users.map(mapUser) });
});

router.get("/roles", auth, hasRole([ROLES.ADMIN]), async (req, res) => {
  const roles = getRoles();

  res.send({ data: roles });
});

router.patch("/:id", auth, hasRole([ROLES.ADMIN]), async (req, res) => {
  const newUser = await editUser(req.params.id, {
    role_id: req.body.roleId,
    job: req.body.job
  });

  res.send({ data: mapUser(newUser) });
});

router.delete("/:id", auth, hasRole([ROLES.ADMIN]), async (req, res) => {
  await deleteUser(req.params.id);

  res.send({ error: null });
});

module.exports = router;
