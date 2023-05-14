const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.js',
    baseUrl: "https://displate.com",
    setupNodeEvents(on, config) {
      return cloudPlugin(on, config);
    },
  },
});
