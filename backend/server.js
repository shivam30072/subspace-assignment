require("dotenv").config();
const express = require("express");
const app = express();

const blogRouter = require("./routes/blogRoute");
const { config } = require("dotenv");

const PORT = process.env.PORT || 5000;
app.use("/api", blogRouter);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
