import express from "express";

import { signup } from "../controllers/auth.js";

export const authRoutes = express.Router();

authRoutes.post("/signup", signup);
