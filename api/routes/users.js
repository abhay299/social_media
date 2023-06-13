import express from "express";
import { getUser, getAllUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/find/:userId", getUser);
router.get("/", getAllUser);
router.put("/", updateUser);

export default router;