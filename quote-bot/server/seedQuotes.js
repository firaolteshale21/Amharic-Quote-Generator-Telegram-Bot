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
     { text: "ተልባ ቢንጫጫ በአንድ ሙቀጫ", author: "" },
     { text: "በሬ ካራጁ ይውላል", author: "" },
     { text: "ሸኚ ቤት አያደርስም", author: "" },
     { text: "መልከ ጥፉን በስም ይደግፉ", author: "" },
     { text: "ስጋ ቁጠር ቢሉት ጣፊያ አንድ አለ", author: "" },
     { text: "ከኑግ ጋር የተገኘህ ሰሊጥ አብረህ ተወቀጥ", author: "" },
     { text: "ላም ባልዋለበት ኩበት ለቀማ", author: "" },
     { text: "ድመት መንኩሳ አመሏን አትረሳ", author: "" },
     { text: "ካንበሳ መንጋጋ ማን ያወጣል ስጋ", author: "" },
     { text: "ብቻውን የበላ ብቻውን ይሞታል", author: "" },
     { text: "ዶሮን ሲያታልሏት በመጫኛ ጣሏት", author: "" },
     { text: "ስራ ያጣ መነኩሴ ቆቡን ቀዶ ይሰፋል", author: "" },
     { text: "የማያልፍለት ደሃ ሀብታም ይጋብዛል", author: "" },
     { text: "አውቆ የተኛ ቢቀሰቅሱት አይሰማም", author: "" },
     { text: "መብላቷን ሳታቅ አጇን ታጠበች", author: "" },
     { text: "ሴት ሲበዛ ጎመን ጠነዛ", author: "" },
     { text: "ፈረስ ያደርሳል እንጂ አይዋጋም", author: "" },
     { text: "በደንባራ በቅሎ ቃጭል ተጨምሮ", author: "" },
     { text: "መካሪ የሌለው ንጉስ ያለ አንድ አመት አይነግስ", author: "" },
     { text: "የምበላው ሳጣ ልጄ ጥርስ አወጣ", author: "" },
     { text: "ሆድ ለባሰው ማጭድ አታውሰው", author: "" },
     { text: "ጌታዋን የተማመነች በግ ላቷን ውጭ ታሳድራለች", author: "" },
     { text: "ለተቀማጭ ሰማይ ቅርቡ ነው", author: "" },
     { text: "ላም አለኝ በሰማይ ወተቷንም አላይ", author: "" },
     { text: "አልጠግብ ባይ ሲተፋ ያድራል", author: "" },
     { text: "ሲያዩት ያላማረ ሲበሉት ያቅራል", author: "" },
     { text: "ጋኖች አለቁና ምቸቶች ጋን ሆኑ", author: "" },
   ];

  await Quote.insertMany(quotes);
  console.log("Quotes added");
  process.exit();
};

seedQuotes();
