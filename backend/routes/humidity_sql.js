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

//humidity Level GET for sensordata
app.get('/humidityData', (req, res) => {
  const q = `SELECT id, humidity, time_stamp  FROM sensordata`;

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

//humidity POST for sensordata
app.post('/humidityData', (req, res) => {
    const q = 'INSERT INTO sensordata (`humidity`) VALUES (?)';
    const values = [5];
  
    db.query(q, [values], (err, data) => {
      if (err) {
          res.status(400).json({
              message: err
          });
          return res.json(data);
      }
    });
  });

//humidity REMOVE for sensordata
app.delete("/humidityData/", (req, res) => {
    const humidityId = 7;
    const q = " DELETE FROM sensordata WHERE id = ? ";
  
    db.query(q, [humidityId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });

    // const trunc = "TRUNCATE TABLE sensordata";
    // db.query(trunc, (err, data) => {
    //     if (err) return res.send(err);
    //     return res.json(data);
    //   });

  });


//DATA
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//FUZZY

//humidity GET for fuzzy
app.get('/humidityFuzzy', (req, res) => {
    const q = `SELECT id, humidity, time_stamp FROM fuzzyinput`;

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
          const formattedTimestamp = timestamp.format("HH:mm") + " " + month + " " + timestamp.format("DD");
          record.time_stamp = formattedTimestamp;
      });
  
        if (data.length) {res.json(data)
        }
        else res.json({});
  
    });
  });

  //humidity POST for fuzzyinput
app.post('/humidityFuzzy', (req, res) => {
    const q = 'INSERT INTO fuzzyinput (`humidity`) VALUES (?)';
    const values = [91];
  
    db.query(q, [values], (err, data) => {
      if (err) {
          res.status(400).json({
              message: err
          });
          return res.json(data);
      }
    });
  });


  //humidity REMOVE for fuzzyinput
app.delete("/humidityFuzzy", (req, res) => {
    const humidityId = 7;
    const q = " DELETE FROM fuzzyinput WHERE id = ? ";
  
    db.query(q, [humidityId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });


module.exports = app;