const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require('cors');

// Iniciar 
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect( //user@password apos mongodb://
    'mongodb://172.17.141.26:27017/tcc_node_api'
);
requireDir('./src/models')

//rotas
app.use('/api', require('./src/routes')) //Use "wildcard" aceita qualquer requisicao

app.listen(8080);