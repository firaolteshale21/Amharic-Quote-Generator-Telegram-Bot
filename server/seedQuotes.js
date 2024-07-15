const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Quote = require("./models/quote");

// Load environment variables from .env file
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

const seedQuotes = async () => {
  await connectDB();
    const quotes = [
      //here you can seed quotes to the database
      

      //below are examples how you can feed quotes 
      
      { text: "ፅድቁ ቀርቶብኝ በቅጡ በኮነነኝ", author: "" },
      { text: "የማያውቁት አገር አይናፍቅም", author: "" },
      { text: "የአህያ ባል ከጅብ አያስጥልም", author: "" },
     
    ];

  await Quote.insertMany(quotes);
  console.log("Quotes added");
  process.exit();
};

seedQuotes();
