const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const tools = require("./routes/tools");
const favorites = require("./routes/favorites");

app.use(express.json());
app.use(cors());
app.use("/api/tools", tools);
app.use("/api/favorites", favorites);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server is running!");
});
