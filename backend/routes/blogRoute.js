const express = require("express");

const router = express.Router();

const { getBlogsData, searchBlogs } = require("../controllers/blogController");

router.route("/blog-stats").get(getBlogsData);
router.route("/blog-search").get(searchBlogs);

module.exports = router;
