const express = require("express");

const app = express();

const posts = [
  {
    username: "Fahimeh",
    title: "Post 1"
  },
  {
    username: "Faezeh",
    title: "Post 2"
  }
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(3000);
