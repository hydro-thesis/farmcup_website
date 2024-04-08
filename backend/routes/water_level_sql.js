const express = require("express");
const app = express();
const db = require('../database/database.js');
const moment = require('moment');

// Function to convert numeric month to words
function convertMonthToWords(month) {
    const monthsArray = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    return monthsArray[month - 1]; // converting timestamp to a more readable format
}

// Water Level GET route
app.get('/waterLevelData', (req, res) => {
  const q = `SELECT id, water_level, time_stamp FROM sensordata`;

  db.query(q, (err, data) => {
      if (err) {
          return res.status(400).json({
              message: err
          });
      }
      data.forEach(record => {
        const timestamp = moment.utc(record.time_stamp).utcOffset('+08:00');
        const month = convertMonthToWords(timestamp.month() + 1);
        const formattedTimestamp = timestamp.format("HH:mm");
        record.time_stamp = formattedTimestamp;
    });

    if (data.length) {
      res.json(data);
    } else {
      res.json({});
    }
  });
});

// Water Level POST route
app.post('/waterLevelData', (req, res) => {
    const q = 'INSERT INTO sensordata (`water_level`) VALUES (?)';
    const values = [5];
  
    db.query(q, [values], (err, data) => {
      if (err) {
          return res.status(400).json({
              message: err
          });
      }
      res.json(data);
    });
});

// Water Level DELETE route
app.delete("/waterLevelData", (req, res) => {
    const waterLevelId = 7;
    const q = "DELETE FROM water_level WHERE id = ?";
  
    db.query(q, [waterLevelId], (err, data) => {
      if (err) {
          return res.status(400).json({
              message: err
          });
      }
      res.json(data);
    });
});

module.exports = app;
