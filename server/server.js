const express = require("express");
const app = express();
const utility = require("./services/get-file-info.js");
const cors = require("cors");
const {getFileInfo} = require("./services/get-file-info");
const corsOptions = {
  origin: ["http://localhost:5173", "client"],
};

app.use(cors(corsOptions));

let data = undefined;

function sendData(data) {
  app.get("/api", (req, res) => {
    res.send(data);
  })
}

utility.getFileInfo(data, sendData);

app.listen(8080, () => {
  console.log("Server running on port 8080");
})
