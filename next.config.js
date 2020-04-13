require("dotenv").config();

module.exports = {
  env: {
    BASE_URL: "http://localhost:3000",
    GH_AUTH: process.env.GH_AUTH,
  },
};
