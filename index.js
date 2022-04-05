const express = require("express");
const app = express();

// @service  needable info
// @name     middleware
app.use(express.json());

app.listen(8000, () => {
  console.log("server running");
});
