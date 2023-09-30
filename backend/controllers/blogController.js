const apiReq = require("../curlApi/api");
const statistics = require("../blogAnalytics/analytics");

const getBlogsData = async (req, res) => {
  // Fetching blogs using given third party api
  const { blogs } = await apiReq();

  //Total number of blogs
  if (blogs) {
    const numOfBlogs = statistics("SIZE", blogs);

    //Blog with longest title
    const longestBlog = statistics("LONGEST BLOG", blogs);

    // Title of longest Blog
    const { title } = longestBlog;

    const blogsWithPrivacyInTitle = statistics("FILTER", blogs, "privacy");

    //Total number of blogs with privacy in title
    const numOfBlogsWithPrivacy = statistics("SIZE", blogsWithPrivacyInTitle);

    //Array of unique blog title
    const uniqueBlogTitles = statistics("UNIQUE", blogs, "title");

    res.status(200).json({
      totalBlogs: numOfBlogs,
      titleOfLongestBlog: title,
      blogsWithPrivacyInTitle: numOfBlogsWithPrivacy,
      uniqueBlogTitles: uniqueBlogTitles,
    });
  } else {
    res.status(500).json({ message: "an error occured" });
  }
};

const searchBlogs = async (req, res) => {
  const queryParams = req.query?.search;
  const { blogs } = await apiReq();
  if (!queryParams) {
    res.status(200).json(blogs);
    return;
  }
  if (blogs) {
    const blogsWithQueryParams = statistics("FILTER", blogs, queryParams);
    const numOfBlogsWithQueryParams = statistics("SIZE", blogsWithQueryParams);

    if (numOfBlogsWithQueryParams === 0) {
      res.status(404).json({ message: `No blogs found with ${queryParams}` });
      return;
    }

    res.status(200).json(blogsWithQueryParams);
  } else {
    res.status(500).json({ message: "an error occured" });
  }
};

module.exports = {
  getBlogsData,
  searchBlogs,
};
