const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Quote = require("../models/quote"); // Adjust the path as necessary

dotenv.config();
// Check if MONGO_URI is defined
if (!process.env.MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in .env file");
  process.exit(1);
}
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
// Initialize the bot with the Telegram bot token
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// Fetch a random quote from the database
const getRandomQuoteFromDB = async () => {
  try {
    const count = await Quote.countDocuments();
    const random = Math.floor(Math.random() * count);
    const quote = await Quote.findOne().skip(random);
    return quote;
  } catch (err) {
    console.error("Error fetching quote:", err);
    return null;
  }
};

bot.start((ctx) => {
  ctx.reply("እንኳን ወደ አማርኛ ጥቅሶች ቦት በደህና መጡ");
  ctx.reply("ጥቅስ ለማግኘት /quotes ብለው ይጻፉ ወይም ይጫኑት");
});

bot.command("quotes", async (ctx) => {
  const quote = await getRandomQuoteFromDB();
  if (quote) {
    ctx.reply(`${quote.text} ${quote.author}`);
  } else {
    ctx.reply("Sorry, I could not fetch a quote at this time.");
  }
});

const startBot = async () => {
  await connectDB();
  bot.launch();
};

startBot();

module.exports = bot;
