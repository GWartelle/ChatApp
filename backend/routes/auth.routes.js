import express from "express";
import {
  signup,
  login,
  logout,
  deleteAccount,
} from "../controllers/auth.controllers.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.delete("/delete-account", protectRoute, deleteAccount);

export default router;
