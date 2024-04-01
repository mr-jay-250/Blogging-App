import express from "express";
import mongoose from "mongoose";
import path from "path";
import 'dotenv/config'

import userRoute from './routes/user.js'

const app = express();
const PORT = process.env.PORT || 8001;

mongoose
  .connect('mongodb://localhost:27017/bloging-site')
  .then(() => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render('home');
})

app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
