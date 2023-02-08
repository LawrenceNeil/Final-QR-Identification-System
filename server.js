//backend for QR Identification system

// import section
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");

//route imports
const protectedRoutes = require("./routes/protected");

const { login, logout } = require("./controller/authCtrl");
//initialize express
const app = express();
const port = 3010;

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    key: "userId",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
  })
);

//auth routes

app.post("/auth/login", login);

//routes
// app.use((req, res, next) => {
//   console.log(req.session.cookie);
//   if (!req.session.loggedIn) {
//     return res.json({ message: "Unauthorized" });
//   }
//   next();
// });

//protected routes
app.use("/", protectedRoutes);

//logout route
app.get("/auth/logout", logout);

//port
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
