const fs = require("fs");
const path = require("path");
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

fs.writeFile(
  path.join(__dirname, "files", "testin.txt"),
  "is this really going to work?",

  (err, data) => {
    if (err) throw err;
    console.log("good job your doign it Peter");

    fs.appendFile(
      path.join(__dirname, "files", "testin.txt"),
      "It is working ;)",

      (err, data) => {
        if (err) throw err;
        console.log("good job your doign it Peter");
      }
    );
  }
);

console.log("Hello ");
process.on(`uncaughtException`, (err) => {
  console.error(`there was an uncaught error: ${err}`);
  process.exit(1);
});
