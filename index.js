const connection = require("./connection/db");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const datatable = require("./routes/Datatable");

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", datatable);

app.listen(PORT, (req, res) => {
  console.log(`Server running at port ${PORT}`);
});
