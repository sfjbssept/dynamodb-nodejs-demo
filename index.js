import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import user from "./routes.js"

dotenv.config();

const app = express();

app.use(bodyParser.json());

const port = 5000;

app.get("/", (req, res) => {
  res.json({ Hi: "This is a Node js app" });
});

app.use('/api',user)

app.listen(port, () => {
  console.log(`Port is listening on ${port}`);
});
