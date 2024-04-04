const express = require("express");
const app = express();
var db = require('../database/database.js');
var moment = require('moment');

//tds Level GET
app.get('/tds', (req, res) => {
  let sql = `SELECT tds, time_stamp  FROM sensordata`;

  db.query(sql, (err, result) => {
      if (err) {
          res.status(400).json({
              message: err
          });
          return;
      }

      if (result.length) res.json(result);
      else res.json({});        
  });
});

module.exports = app;