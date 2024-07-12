const express = require("express");
const router = express.Router();
const { getRandomQuote } = require("../controllers/quoteController");

router.get("/random", getRandomQuote);

module.exports = router;
