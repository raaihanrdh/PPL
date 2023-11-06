import express from "express";
import {
  getMahasiswa,
  getMahasiswaById,
  // createUser,
  //   updateUser,
  //   deleteUser,
} from "../controllers/Mahasiswa.js";
// import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/mahasiswa", getMahasiswa);
router.get("/mahasiswa/:id", getMahasiswaById);
// router.post("/mahasiswa", createUser);
// router.patch("/operator/:id", updateUser);
// router.delete("/operator/:id", deleteUser);
export default router;
