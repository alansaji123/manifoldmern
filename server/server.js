require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/error.middleware");
const { AUTH_ROUTE_PREFIX } = require("./constants/route.constants");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(AUTH_ROUTE_PREFIX, require("./routes/auth/auth.route"));

app.use(errorHandler);

const PORT = process.env.SERVER_PORT || 4001;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
