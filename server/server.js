const express = require("express");
const app = express();
const utility = require("./get-csv-data");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

const data = utility.getCSVData();

app.get("/api", (req, res) => {
  res.json({data: data});
})

app.listen(8080, () => {
  console.log("Server running on port 8080");
})
