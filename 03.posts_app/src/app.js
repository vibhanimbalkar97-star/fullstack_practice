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

  const post = await postModel.create({
    image: result,
    caption: req.body.caption,
  });

  res.status(201).json({
    message: "Post created successfully",
  });
});

module.exports = app;
