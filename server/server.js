const express = require("express");
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 5002;
const mongoose = require("mongoose");
const { MONGO_URL } = require("./config");
const corsOptions = { exposedHeaders: "Authorization" };
const routes = require("./routes");
const { getAllUsers, addUser, addBulkUsers } = require("./controller/user");
const userData = require('./helper/user.json');
const { getAllUsersDb } = require("./services/userServices");
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"),
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"),
    res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("Testing done !");
});


async function connectDb() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(MONGO_URL);
  } catch (e) {
    console.log(e, "error");
  }
}
async function uploadUsersData(){
  const user = await getAllUsersDb()
  if(user.length){
    console.log("User exists", user.length)
  }
  else{
    console.log("No User", userData)
    await addBulkUsers(userData)
  }
}
connectDb().then(() => {
  console.log("DB Connected");
  uploadUsersData();
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});
