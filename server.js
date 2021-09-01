const express = require("express");
const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
