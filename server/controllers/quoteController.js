const Quote = require("../models/quote");

// Get a random quote
const getRandomQuote = async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    const random = Math.floor(Math.random() * count);
    const quote = await Quote.findOne().skip(random);
    res.json(quote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRandomQuote };
