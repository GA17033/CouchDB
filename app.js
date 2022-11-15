require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use("/api", require("./routes"));


