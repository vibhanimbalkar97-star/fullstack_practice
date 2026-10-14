const express = require("express");
const postModel = require("./models/post.model.js");
const multer = require("multer");
const uploadFile = require("./services/storage.service.js");

const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

// POST
app.post("/create-post", upload.single("image"), async (req, res) => {
  //    console.log(posts)
  // console.log(req.file) image details

  const result = await uploadFile(req.file.buffer);
  // console.log(result)

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  res.status(201).json({
    message: "Post created successfully",
    post
  });
});

// GET method
app.get("/posts", async(req, res) => {
  const posts = await postModel.find()

  res.status(200).json({
    message: "Posts fetched successfully",
    posts:posts
  })
} )

module.exports = app;
