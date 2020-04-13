const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
require("dotenv").config();

module.exports = (phase) => {
  return {
    env: {
      BASE_URL:
        phase === PHASE_DEVELOPMENT_SERVER
          ? "http://localhost:3000"
          : "https://personal-site-v2-phi.now.sh",
      GH_AUTH: process.env.GH_AUTH,
    },
  };
};
