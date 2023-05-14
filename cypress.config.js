const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://displate.com",
    setupNodeEvents(on, config) {
      return cloudPlugin(on, config);
    },
  },
});
