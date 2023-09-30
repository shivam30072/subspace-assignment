const apiReq = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "x-hasura-admin-secret":
          "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
      },
    };

    const response = await fetch(
      "https://intent-kit-16.hasura.app/api/rest/blogs",
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error occured", error);
  }
};

module.exports = apiReq;
