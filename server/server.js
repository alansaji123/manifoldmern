require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/error.middleware");
const {
  AUTH_ROUTE_PREFIX,
  CUSTOMER_ROUTE_PREFIX,
  ADMIN_ROUTE_PREFIX,
} = require("./constants/route.constants");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
    limit: "2mb",
  })
);
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("public/uploads"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(AUTH_ROUTE_PREFIX, require("./routes/auth/auth.route"));
app.use(CUSTOMER_ROUTE_PREFIX, require("./routes/customer/customer.route"));
app.use(ADMIN_ROUTE_PREFIX, require("./routes/admin/admin.route"));

app.use(errorHandler);

const PORT = process.env.SERVER_PORT || 4001;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
