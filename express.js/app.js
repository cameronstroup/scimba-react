const express = require("express");
const res = require("express/lib/response");
const app = express();
const PORT = process.env.PORT || 3500;
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => console.log(`Server is running port ${PORT}`));
