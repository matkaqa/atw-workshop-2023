const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig({
  e2e: {
    env:{
      defualtFailureRate: 1
    },
    specPattern: 'cypress/e2e/**/*.js',
    baseUrl: "https://displate.com",
    setupNodeEvents(on, config) {
      return cloudPlugin(on, config);
    },
  },
});
