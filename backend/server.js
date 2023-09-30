require("dotenv").config();
const express = require("express");
const app = express();

const blogRouter = require("./routes/blogRoute");
const { config } = require("dotenv");

const PORT = process.env.PORT || 5000;
app.use("/api", blogRouter);
app.get("/", (req, res) => {
  res.status(200).json({ message: "goto api/blog-stats or api/blog-search" });
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
