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
      { text: "ፅድቁ ቀርቶብኝ በቅጡ በኮነነኝ", author: "" },
      { text: "የማያውቁት አገር አይናፍቅም", author: "" },
      { text: "የአህያ ባል ከጅብ አያስጥልም", author: "" },
      { text: "አህያውን ፈርቶ ዳውላውን", author: "" },
      { text: "ያልሰማ ጆሮ ከጎረቤት ያጣላል", author: "" },
      { text: "የቸገረው እርጉዝ ያገባል", author: "" },
      { text: "ስራ ለሰሪው እሾህ ላጣሪው", author: "" },
      { text: "ነገርን ከስሩ ውሃን ከጥሩ", author: "" },
      { text: "ሰርገኛ መጣ በርበሬ ቀንጥሱ", author: "" },
      { text: "ድር ቢያብር አንበሳ ያስር", author: "" },
      { text: "ከአጋም የተጠጋ ቁልቋል ሲያለቅስ ይኖራል", author: "" },
      { text: "አህያ የሌለው በቅሎ ይንቃል", author: "" },
      { text: "አሳ ጎርጓሪ ዘንዶ ያወጣል", author: "" },
      { text: "የቆጡን አወርድ ብላ የብብቷን ጣለች", author: "" },
      { text: "ዶሮ ጭራ ማረጃዋን አወጣች", author: "" },
      { text: "ጉልቻ ቢቀያየር ወጥ አያጣፍጥም", author: "" },
      { text: "የቸኮለች አፍሳ ለቀመች", author: "" },
      { text: "ምከረው ምከረው እቢ ካለ መከራ ይምከረው", author: "" },
      { text: "አለባብሰው ቢያርሱ በአረም ይመለሱ", author: "" },
      { text: "የነ ቶሎ ቶሎ ቤት ግድግዳው ሰንበሌጥ", author: "" },
      { text: "ሀምሳ ሎሚ ለአንድ ሰው ሸክሙ ለሀምሳ ሰው ጌጡ ነው", author: "" },
      { text: "ሆድ ያባውን ብቅል ያወጣዋል", author: "" },
      { text: "የምጣዱ እያለ የእንቅቡ ተንጣጣ", author: "" },
      { text: "ለጥምቀት ያልሆነ ቀሚስ ይበጣጠስ", author: "" },
    ];

  await Quote.insertMany(quotes);
  console.log("Quotes added");
  process.exit();
};

seedQuotes();
