import express from "express";
import {
  getIrs,
  getIrsById,
  // createUser,
  //   updateUser,
  //   deleteUser,
} from "../controllers/Irs.js";
import { getMahasiswa } from "../controllers/Mahasiswa.js";
import { isAuthenticated, isMahasiswa } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/irs",isAuthenticated, isMahasiswa, getIrs, getMahasiswa);
router.get("/irs/:id", isMahasiswa, getIrsById);
// router.post("/mahasiswa", createUser);
// router.patch("/operator/:id", updateUser);
// router.delete("/operator/:id", deleteUser);
export default router;
