const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");
const isSuperAdmin = require("../middlewares/isSuperAdmin");

router.post("/", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/", auth, isSuperAdmin, userController.getAllUser);
router.get("/:id", auth, isSuperAdmin, userController.viewUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
