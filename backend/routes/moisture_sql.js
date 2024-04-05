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
app.get('/moistureData', (req, res) => { //moistureData api endpoint in backend is different from /moisture URL from frontend
  const q = `SELECT id, moisture, time_stamp  FROM sensordata`; //sql query

  db.query(q, (err, data) => {
      if (err) {
          res.status(400).json({ //if error
              message: err
          });
          return res.json(data); //returns the response
      }
      data.forEach(record => { //only for conversion of timestamp
        const timestamp = moment.utc(record.time_stamp).utcOffset('+08:00'); //UTC+8
        const month = convertMonthToWords(timestamp.month() + 1);
        const formattedTimestamp = timestamp.format("HH:mm");
        record.time_stamp = formattedTimestamp;
    });

      if (data.length) {res.json(data) //here is the data
      }
      else res.json({});

  });
});

//moisture POST for sensordata
app.post('/moistureData', (req, res) => {
    const q = 'INSERT INTO sensordata (`moisture`) VALUES (?)';
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

//moisture REMOVE for sensordata
app.delete("/moistureData/", (req, res) => {
    const moistureId = 7;
    const q = " DELETE FROM sensordata WHERE id = ? ";
  
    db.query(q, [moistureId], (err, data) => {
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

//moisture GET for fuzzy
app.get('/moistureFuzzy', (req, res) => {
    const q = `SELECT id, moisture, time_stamp FROM fuzzyinput`;

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

  //moisture POST for fuzzyinput
app.post('/moistureFuzzy', (req, res) => {
    const q = 'INSERT INTO fuzzyinput (`moisture`) VALUES (?)';
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


  //moisture REMOVE for fuzzyinput
app.delete("/moistureFuzzy", (req, res) => {
    const moistureId = 7;
    const q = " DELETE FROM fuzzyinput WHERE id = ? ";
  
    db.query(q, [moistureId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });


module.exports = app;