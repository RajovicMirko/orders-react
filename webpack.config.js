const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@c": path.resolve(__dirname, "./src/components/"),
    },
  },
};
