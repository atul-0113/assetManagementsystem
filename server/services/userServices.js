const UserModel = require("../models/user");

const getAllUsersDb = async () => {
  //GET All users from database
  return await UserModel.find();
};

const createUserDb = async (user) => {
  //ADD user to Database
  return await user.save();
};
const deleteUserDb = async (userId) => {
  //DELETE user from Database
  return await UserModel.findByIdAndDelete(userId);
};

const updateUserDb = async (id, data) => {
  //UPDATE user data
  return await UserModel.findByIdAndUpdate(id, data);
};

const getUserByIdDb = async (userId) => {
  //GET user by ID
  return await UserModel.findById(userId);
};

const addMany = async (userList) => {
  //Add multiple user to db
  return await UserModel.insertMany(userList);
};
module.exports = {
  getAllUsersDb,
  createUserDb,
  deleteUserDb,
  updateUserDb,
  getUserByIdDb,
  addMany,
};
