const express = require("express");
const router = express.Router();

const Inventory = require("./inventory.js");
const User =  require("./user")
const defaultRoutes = [
  {
    path: "/inventoryList",
    route: Inventory,
  },
  {
    path: "/user",
    route: User,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
