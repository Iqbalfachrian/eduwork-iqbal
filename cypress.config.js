const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cqzpj1',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
    },
    testIsolation: false
  },
});
