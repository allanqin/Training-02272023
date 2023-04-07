const router = require("express").Router();

const wishlist = [];

// google book api
// get books based on query
// get wishlist
// add a book to wishlist
// delete a book from wishlist

router.get("/", (req, res) => {
  res.send(wishlist);
});

router.post("/", (req, res) => {
  console.log(req.body);
  const book = req.body;
  wishlist.push(book);
  res.json(wishlist);
});

router.delete("/", (req, res) => {
  const bookId = req.body["id"];
  const index = wishlist.find((book) => {
    return book.id === bookId;
  });
  if (index) {
    wishlist.splice(index, 1);
    res.send("success");
  } else {
    res.send("Book doesn't exist on the wishlist");
  }
});

module.exports = router;
