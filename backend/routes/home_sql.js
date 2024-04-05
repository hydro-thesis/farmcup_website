const express = require("express");
const app = express();
var db = require('../database/database.js');
var moment = require('moment');

// Function to convert numeric month to words
function convertMonthToWords(month) {
    const monthsArray = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    return monthsArray[month - 1]; // converting timestamp to a more readable format
}

//moisture Level GET for sensordata
app.get('/homeData', (req, res) => {
  const q = `SELECT * FROM sensordata`;

  db.query(q, (err, data) => {
      if (err) {
          res.status(400).json({
              message: err
          });
          return res.json(data);
      }
      data.forEach(record => {
        const timestamp = moment.utc(record.time_stamp).utcOffset('+08:00');
        const month = convertMonthToWords(timestamp.month() + 1);
        const formattedTimestamp = timestamp.format("HH:mm");
        record.time_stamp = formattedTimestamp;
    });

      if (data.length) {res.json(data)
      }
      else res.json({});

  });
});

module.exports = app;