const router = require("express").Router();
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

const users = [];

router.post("/register", (req, res) => {
  const newUser = {
    username: req.body.username,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString(),
  };

  users.push(newUser);
  res.status(200).send("success");
});

router.post("/login", (req, res) => {
  const user = users.find((user) => {
    return user.username === req.body.username;
  });
  if (!user) {
    res.status(401).send("Wrong username");
    return;
  }

  const decryptedPassword = CryptoJS.AES.decrypt(
    user.password,
    process.env.PASSWORD_SECRET
  ).toString(CryptoJS.enc.Utf8);

  if (decryptedPassword !== req.body.password) {
    res.status(401).send("Wrong password");
    return;
  }

  const accessToken = jwt.sign(
    {
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "15s",
    }
  );
  res.status(200).json({ accessToken });
});

router.get("/users", authentication, (req, res) => {
  res.json(users);
});

function authentication(req, res, next) {
  console.log("auth middleware");
  const authHeader = req.headers["auth"];
  const token = authHeader.split(" ")[1];
  // console.log(req.headers);
  if (token == null) {
    res.status(401).send("no token");
    return;
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      res.status(401).send("verify error");
      return;
    }
    req.user = user;
    next();
  });
}
module.exports = router;
