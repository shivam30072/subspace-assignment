const lodash = require("lodash");

const statistics = (type, data, filterItem = "") => {
  if (type === "SIZE") {
    const totalBlogs = lodash.size(data);
    return totalBlogs;
  }
  if (type === "LONGEST BLOG") {
    const longestBlog = lodash.maxBy(data, (item) => item?.title.length);
    return longestBlog;
  }
  if (type === "FILTER") {
    const blogsWithFilterItem = lodash.filter(data, (item) =>
      lodash.includes(lodash.toLower(item.title), lodash.toLower(filterItem))
    );
    return blogsWithFilterItem;
  }
  if (type === "UNIQUE") {
    const uniqueBlogTitles = lodash
      .uniqBy(data, filterItem)
      .map((item) => item?.title);
    return uniqueBlogTitles;
  }
};

module.exports = statistics;
