const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/product", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "product.html"));
});

const PORT = 3000;

// Export app for testing
module.exports = app;

// Start server only if file executed directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
} 