const axios = require("axios");

const apiReq = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "x-hasura-admin-secret":
          "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
      },
    };

    const response = await axios.get(
      "https://intent-kit-16.hasura.app/api/rest/blogs",
      options
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log("error occured", error);
  }
};

module.exports = apiReq;
