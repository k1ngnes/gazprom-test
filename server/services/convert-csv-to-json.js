
const convertCSVtoJSON = () => {
    // Node packages for file system
    const fs = require('fs');
    const path = require('path');

    const filePath = path.join(__dirname, 'data/article_def_v_orig.csv');
    let f = fs.readFileSync(filePath, {encoding: 'utf8'},
        function(err){console.log(err);});

// Split on row
    f = f.split("\n");

// Get first row for column headers
    headers = f.shift().split(",");

    const json = [];
    f.forEach(function(d){
        // Loop through each row
        tmp = {}
        row = d.split(",")
        for(let i = 0; i < 5; i++){
            tmp[headers[i]] = row[i];
        }
        // Add object to list
        json.push(tmp);
    });

    const outPath = __dirname + '/data/jsoninfo.json';
// Convert object to string, write json to file
    fs.writeFileSync(outPath, JSON.stringify(json), 'utf8',
        function(err){console.log(err);});
}

module.exports = {
    convertCSVtoJSON
}