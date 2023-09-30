const express = require("express");
const app = express();

const blogRouter = require("./routes/blogRoute");

const PORT = 5000;
app.use("/api", blogRouter);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
