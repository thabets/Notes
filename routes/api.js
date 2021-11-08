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
});

router.get("/api/notes", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
  );
  res.json(data);
});
// delete file function
router.delete("/api/notes/:id", (req, res) => {
  let chosen = req.params.id;

  console.log(chosen);

  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
  );

  const newData = data.filter(({ id }) => id !== chosen);
  console.log(newData);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(newData)
  );
  res.json(req.body);
});

module.exports = router;
