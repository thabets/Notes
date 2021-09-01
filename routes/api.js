const router = require("express").Router();
const fs = require("fs");
const path = require("path");

router.post("/api/notes", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
  );
  // find an id maker

  //write file
});

router.get("/api/notes", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
  );
  res.json(data);
});

module.exports = router;
