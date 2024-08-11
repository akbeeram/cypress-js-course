const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:spec', (spec) => {
        console.log('before:spec', spec);
      })
      // console.log(config);
      // implement node event listeners here
      on('before:run', (details) => {
        console.log(details);
      })
      on('after:run', (results) => {
        console.log('after:run', results);
        if (results) {
          // results will be undefined in interactive mode
          console.log(
            results.totalPassed,
            'out of',
            results.totalTests,
            'passed'
          )
        }
      });
    },
  },
});
