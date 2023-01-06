import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import user from "./routes/user.js";
import admin from "./routes/admin.js";
import InitiateMongoServer from "./config/db.js";

// Initiate Mongo Server
InitiateMongoServer();

const app = express();
dotenv.config();
// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);
app.use("/admin", admin);
app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});