import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/users";
import express from "express";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", createUser);
router.get("/users/:id", getUser);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id", updateUser);

export default router;
