const UserModel = require("../models/user");
const {
  getAllUsersDb,
  createUserDb,
  deleteUserDb,
  updateUserDb,
  getUserByIdDb,
} = require("../services/userServices");

const getAllUsers = async (req, res, next) => {
  //GET ALL USERS
  try {
    const users = await getAllUsersDb();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    throw error;
  }
};

const addUser = async (req, res) => {
  // POST REQUEST ADD NEW USER
  try {
    const newUser = new UserModel(req.body);
    const createdUser = await createUserDb(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  //DELETE USER BY ID (params)
  try {
    const { userId } = req.params;
    const deletedUser = await deleteUserDb(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  //UPDATE USER BY ID
  try {
    const { userId } = req.params;
    const userObj = req.body;
    console.log(userId, "userId");

    const updateUser = await updateUserDb(userId, userObj);
    if (updateUser)
      res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  //GET USER BY ID
  try {
    const { userId } = req.params;
    const userData = await getUserByIdDb(userId);
    if (userData) {
      res.status(200).json({ userData });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

async function addBulkUsers(userList) {
  //ADD USER - POST - BULK
  try {
    const insertedUsers = await addMany(userList);
    return insertedUsers;
  } catch (error) {
    console.error("Error adding bulk users to MongoDB:", error);
    throw error;
  }
}

module.exports = {
  getAllUsers,
  addBulkUsers,
  addUser,
  updateUser,
  deleteUser,
  getUserById,
};
