const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: '185.74.252.17',
  user: 'jukbq211',
  password: 'dkfllfyz0401',
  database: 'jukbq211_monoSushi'
});


db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});