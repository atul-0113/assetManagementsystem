
const UserModel = require('../models/user');
const { getAllUsersDb } = require('../services/userServices');

//Get all users

const getAllUsers = async(req, res , next)=>{
    try {
      const users = await getAllUsersDb();
      console.log('All users retrieved:', users);
      return res.send(users)
    } catch (error) {
      console.error('Error retrieving users:', error);
      throw error;
    }
  }

  async function addBulkUsers(userList) {
  try {
    // Add bulk users 
    const insertedUsers = await UserModel.insertMany(userList);
    console.log('Bulk users added successfully:', insertedUsers);
    return insertedUsers;
  } catch (error) {
    console.error('Error adding bulk users to MongoDB:', error);
    throw error;
  }
}
async function addUser(userData) {
    try {
      const newUser = new UserModel(userData);
      //Add single User
      const savedUser = await newUser.save();
      console.log('User added successfully:', savedUser);
      return savedUser;
    } catch (error) {
      console.error('Error adding user to MongoDB:', error);
      throw error;
    }
  }
module.exports={
    getAllUsers,
    addBulkUsers,
    addUser
}
