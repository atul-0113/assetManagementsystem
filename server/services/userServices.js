const UserModel = require("../models/user");

const getAllUsersDb = async () => {
  return await UserModel.find();
};

module.exports= {
    getAllUsersDb
}