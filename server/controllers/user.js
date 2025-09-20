const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generate } = require("../helper/token");
const ROLES = require("../contants/roles");

// register
async function register(login, password) {
  if (!login) {
    throw new Error("Логин не может быть пустым");
  }
  if (!password) {
    throw new Error("Пароль не может быть пустым");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({ login, password: passwordHash });
  const token = generate({ id: user.id });

  return { user, token };
}

// login

async function login(login, password) {
  const user = await User.findOne({ login });
  if (!login) {
    throw new Error("Логин не может быть пустым");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Неверный пароль");
  }

  const token = generate({ id: user.id });

  return { user, token };
}

//all users

function getUsers() {
  return User.find();
}

// roles

function getRoles() {
  return [
    { id: ROLES.ADMIN, name: "Руководитель" },
    { id: ROLES.MODERATOR, name: "Заместитель" },
    { id: ROLES.READ, name: "Исполнитель" },
  ];
}

//delete user

function deleteUser(id) {
  return User.deleteOne({ _id: id });
}

//edit user
function editUser(id, userData) {
  return User.findByIdAndUpdate(id, userData, { returnDocument: "after" });
}

module.exports = {
  register,
  login,
  getUsers,
  getRoles,
  deleteUser,
  editUser,
};
