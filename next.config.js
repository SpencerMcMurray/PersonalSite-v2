const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
require("dotenv").config();

module.exports = (phase) => {
  return {
    env: {
      BASE_URL: phase === PHASE_DEVELOPMENT_SERVER ? "http://" : "https://",
      GH_AUTH: process.env.GH_AUTH,
    },
  };
};
