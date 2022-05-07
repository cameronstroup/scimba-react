const express = require("express");
const router = express.Router();
const journals = require("./Journals");

router.get("/api/journals/:id", (req, res) => {
  const found = journals.some(
    (member) => journals.id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      journals.filter((journals) => journals.id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({
      msg: `cameron good job, this is an error because no member with the id of ${req.params.id} but you all killing it`,
    });
  }
});

router.get("/api/journals", (req, res) => res.json(journals));

module.exports = router;
