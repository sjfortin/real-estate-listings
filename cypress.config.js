const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "awazys",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:8082/"
  },
});
