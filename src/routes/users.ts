import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/users";
import express from "express";
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
import {
  userCreateValidationSchema,
  userUpdateValidationSchema,
} from "../middleware/userValidationSchema";
import validateRequest from "../middleware/validation.middleware";
import { processImage } from "../middleware/processImage.middleware";

const router = express.Router();

router.get("/users", getAllUsers);
router.post(
  "/users",
  upload.single("upload"),
  processImage,
  validateRequest(userCreateValidationSchema),
  createUser
);
router.get("/users/:id", getUser);
router.delete("/users/:id", deleteUser);
router.patch(
  "/users/:id",
  upload.single("upload"),
  processImage,
  validateRequest(userUpdateValidationSchema),
  updateUser
);

export default router;
