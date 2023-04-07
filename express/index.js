const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const app = express();
const port = 3000;
dotenv.config();

const wishlistRoute = require("./router/wishlistRoute");
const authRoute = require("./router/authRoute");

// session id vs jwt

// session id
// client -> server
// server stores user info on the server side
//        <- session id
// client sends request with session id
// server verifies user with session id by doing a look up
//        <- response

// jwt
// client -> server
// server creates jwt for user
//        <- jwt
// client sends request with jwt
// server decrypts jwt to get user info, use the info to verify the user
//        <-response

app.use(express.json());

app.use((req, res, next) => {
  console.log("middleware...");
  next();
});

app.use("/wishlist", wishlistRoute);
app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
  return;
});

app.get("/books", async (req, res) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${req.query.q}&startIndex=0&maxResults=20`;
  const results = await axios(url);
  res.json(results.data);
});

app.listen(port, () => {
  console.log(`Example express app listening on port ${port}`);
});
