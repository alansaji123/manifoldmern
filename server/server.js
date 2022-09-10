const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/auth", require("./routes/auth/auth.route"));

app.listen(4001, () => {
  console.log("app listening on port 4001");
});
