const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const port = 3000;

const app = express();

app.use(express.static(__dirname + '/../public'));