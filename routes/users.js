const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUsers,
  deleteUser,
  updateUsers,
  getUser,
  getInsurance,
} = require("../controllers/user_controller");

router.route("/").get(getUsers).post(addUsers);
router.route("/:id").delete(deleteUser).patch(updateUsers).get(getUser);

router.route("/insurance/:id").get(getInsurance);

module.exports = router;
