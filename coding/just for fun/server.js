const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const logger = require("./middleware/logger");
const req = require("express/lib/request");

app.use("./router", require("./router"));
app.use(logger);
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Server is running port ${PORT}`));

//get single Api
