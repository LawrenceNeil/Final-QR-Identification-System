const db = require("../data/dbconfig.js");
const users = [];

const getUserSQL = " SELECT * FROM admin";
db.query(getUserSQL, (err, result) => {
  if (err) {
    throw err;
  }

  const temp = result;
  temp.forEach((element) => {
    users.push(element);
  });
});
exports.login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.json({ message: "Invalid username" });
  }
  if (user.password !== password) {
    return res.json({ message: "Invalid password" });
  } else {
    req.session.loggedIn = true;
    req.session.user = username;
    req.session.Auth = req.sessionID;

    res.json({ message: "Login successful", session: req.session });
  }
};

exports.logout = (req, res) => {
  req.session.loggedIn = false;
  res.status(200).json({ message: "Logged out" });
};
