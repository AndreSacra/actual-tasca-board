//requires
const express = require('express');
const http = require('http');
const request = require('request');
const getIds = require("./Requests/getUniqueIds");
const rInfo = require("./Requests/rankedInfoTreatment");

//initialize app with Express Framework
const app = express();
getIds.getUniqueIdsForTasqueiros();


app.get('/', function (req, res) {
    var info = new rInfo();
    var data = info.getRankedInfo();
    res.end(data);
  })

// Dynamic listen; either deployed or local port 3000
app.listen(process.env.PORT || 3000);