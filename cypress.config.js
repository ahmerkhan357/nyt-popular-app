const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Example of using an event listener to log to the console before the run
      on('before:run', () => {
        console.log('Tests are about to start!');
      });
    },
    baseUrl: 'http://localhost:3000',  // URL for the app being tested
    defaultCommandTimeout: 10000,  // Set a higher timeout for commands
    viewportWidth: 1000,
    viewportHeight: 660,
    video: false,  // Disable video recording for faster tests
  },
});
