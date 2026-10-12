const express = require("express");
const noteModel = require("./models/note.model.js");

const app = express();

app.use(express.json());

// POST
app.post("/notes", async (req, res) => {
  const data = req.body; //{title, description}

  const note = await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "Note created successfully",
  });
});

// GET
app.get("/notes", async (req, res) => {
  // const data = req.body
  // const note = await noteModel.findOne({
  //     title:data.title
  // })

  const notes = await noteModel.find();

  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes,
  });
});

// DELETE
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  const note = await noteModel.findOneAndDelete({
    _id: id,
  });

  res.status(200).json({
    message: "Note deleted successfully",
  });
});

// PATCH
app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const note = await noteModel.findOneAndUpdate({ _id: id }, { title: title });

  res.status(200).json({
    message: "Note updated successfully",
  });
});

module.exports = app;

