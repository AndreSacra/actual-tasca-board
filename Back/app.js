//requires
const express = require('express');
const http = require('http');
const request = require('request');
const getIds = require("./Requests/getUniqueIds")

//initialize app with Express Framework
const app = express();

app.get('/', function (req, res) {
    var data = getIds.getUniqueIdsForTasqueiros();
    res.end(data)
  })

// Dynamic listen; either deployed or local port 3000
app.listen(process.env.PORT || 3000);