import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello human, I'm live" });
});

app.get("/test", (req, res) => {
  res.json({ message: "THIS IS FOR TEST" });
});

app.listen(4000, () => {
  console.log("Running");
});
