const utility = require("./convert-csv-to-json.js");
const fs = require("fs");
const path = require("path");

function getFileInfo(obj, callback) {
    const filePath = path.join(__dirname, '/data/jsoninfo.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err || !data) {
            console.log("File not found or empty, converting CSV to JSON...");
            utility.convertCSVtoJSON();
        }

        // Read again after conversion (or if the first read was successful)
        fs.readFile(filePath, 'utf8', (err, newData) => {
            if (err || !newData) {
                return;
            }

            try {
                // Ensure keys are properly formatted
                const jsonData = JSON.parse(newData);
                obj = jsonData.map(cleanObjectKeys);
                callback(obj);
            } catch (parseErr) {
                console.error("Error parsing JSON:", parseErr);
                return;
            }
        });
    });
}

// Helper function to clean keys
function cleanObjectKeys(obj) {
    const cleanedObj = {};
    for (let [key, value] of Object.entries(obj)) {
        const cleanedKey = key.replace(/^"|"$/g, ""); // Remove extra quotes
        cleanedObj[cleanedKey] = value.replace(/^"|"$/g, ""); // Remove extra quotes from values if needed
    }
    return cleanedObj;
}

module.exports = { getFileInfo };