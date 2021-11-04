const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");

router.post("/api/notes", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
  );

  req.body.id = uniqid();
  //push object into data
  data.push(req.body);
  //write file
  fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(data));
  res.json(req.body);
  console.log(data);
});

router.get("/api/notes", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
  );
  res.json(data);
});

router.delete("/api/notes", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
  );
  req.body
});

module.exports = router;
