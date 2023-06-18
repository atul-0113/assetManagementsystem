const express = require("express");
const { getInventoryList } = require("../controller/inventory");
const router = express.Router();

router.get("/", getInventoryList);
module.exports= router;