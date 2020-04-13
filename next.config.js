const clientConfig = {
  development: {
    baseUrl: "http://localhost:3000",
  },
  production: {
    baseUrl: "http://localhost:3000",
  },
};

module.exports = {
  publicRuntimeConfig: clientConfig[process.env.NODE_ENV || "development"],
};
