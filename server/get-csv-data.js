
const getCSVData = () => {
  const fs = require("fs");
  const { parse } = require("csv-parse");

  const csvData = [];

  fs.createReadStream("article_def_v_orig.csv")
    .pipe(parse({delimiter: ",", from_line: 2}))
    .on("data", (row) => {
      csvData.push([row]);
    })
      .on("end", () => {
          console.log("finished");
      })
      .on("error", (error) => {
          console.log(error.message);
      })

  return csvData;
}

module.exports = {
    getCSVData
}