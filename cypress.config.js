const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://petstore.swagger.io/v2',
    env: {
      requestMode: false,
      hideCredentials: true 
    },
    setupNodeEvents(on, config) {
    },
  },
});
