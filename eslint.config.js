module.exports = [
  // Frontend / Browser JS
  {
    files: ["public/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script" // browser JS usually not modules
    },
    env: {
      browser: true,   // allows document, window, alert, localStorage
      es2021: true
    },
    rules: {
      "no-unused-vars": "warn", // warns if a function/variable is unused
      "no-undef": "error",      // catches real undefined variables
      "semi": ["error", "always"]
    }
  },

  // Backend / Node JS
  {
    files: ["server.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs"
    },
    env: {
      node: true,   // allows __dirname, console, require, module
      es2021: true
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "semi": ["error", "always"]
    }
  }
];