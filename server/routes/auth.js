import express from "express";

import { login, signup } from "../controllers/auth.js";

export const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
