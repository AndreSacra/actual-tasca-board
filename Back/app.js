//requires
const express = require('express');
const http = require('http');
const request = require('request');

//initialize app with Express Framework
const app = express();


// Dynamic listen; either deployed or local port 3000
app.listen(process.env.PORT || 3000);