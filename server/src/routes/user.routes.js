const router = require("express").Router();

const { getProfile, getAllUsers } = require("../controllers/user.controller");
const { authenticate } = require("../middleware/auth.middleware");
const { authorizeRoles } = require("../middleware/role.middleware");

router.get("/profile", authenticate, getProfile);

router.get(
  "/all",
  authenticate,
  authorizeRoles("admin"),
  getAllUsers
);

module.exports = router;