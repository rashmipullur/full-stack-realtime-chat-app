import express, { urlencoded } from "express";
import cors from "cors";

import { authRoutes } from "./routes/auth.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
