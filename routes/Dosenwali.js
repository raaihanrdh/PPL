import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  //   updateUser,
  //   deleteUser,
} from "../controllers/Dosenwali.js";
// import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/dosenwali", getUsers);
router.get("/dosenwali/:id", getUserById);
router.post("/dosenwali", createUser);
// router.patch("/operator/:id", updateUser);
// router.delete("/operator/:id", deleteUser);
export default router;
