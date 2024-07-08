const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const quoteRoutes = require("./routes/quoteRoutes");
const bot = require("./utils/bot");

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/quotes", quoteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

