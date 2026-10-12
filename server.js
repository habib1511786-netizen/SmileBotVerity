
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "SmileBot Verity",
    status: "online",
    message: "BROOOO, THE SERVER IS WORKING!"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime()
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`SmileBot Verity running on port ${PORT}`);
});

