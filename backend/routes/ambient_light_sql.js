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

//ambientLight Level GET for sensordata
app.get('/ambientLightData', (req, res) => {
  const q = `SELECT id, ambient_light, time_stamp  FROM sensordata`;

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

//ambientLight POST for sensordata
app.post('/ambientLightData', (req, res) => {
    const q = 'INSERT INTO sensordata (`ambient_light`) VALUES (?)';
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

//ambientLight REMOVE for sensordata
app.delete("/ambientLightData/", (req, res) => {
    const ambientLightId = 7;
    const q = " DELETE FROM sensordata WHERE id = ? ";
  
    db.query(q, [ambientLightId], (err, data) => {
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

//ambientLight GET for fuzzy
app.get('/ambientLightFuzzy', (req, res) => {
    const q = `SELECT id, ambient_light, time_stamp FROM fuzzyinput`;

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

  //ambientLight POST for fuzzyinput
app.post('/ambientLightFuzzy', (req, res) => {
    const q = 'INSERT INTO fuzzyinput (`ambient_light`) VALUES (?)';
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


  //ambientLight REMOVE for fuzzyinput
app.delete("/ambientLightFuzzy", (req, res) => {
    const ambientLightId = 7;
    const q = " DELETE FROM fuzzyinput WHERE id = ? ";
  
    db.query(q, [ambientLightId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });


module.exports = app;