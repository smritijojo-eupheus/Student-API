const express = require("express");
const app = express();
const studentRoute = require("./src/student/routes");
const env = require("dotenv").config();

// console.log(env.parsed);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/student", studentRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app is listening on port ${port}`));
