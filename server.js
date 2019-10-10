const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir")

// Iniciar 
const app = express();
app.use(express.json())

mongoose.connect( //user@password apos mongodb://
    'mongodb://172.17.220.27:27017/tcc_node_api',
    { useNewUrlParser: true}
);
requireDir('./src/models')

//rotas
app.use('/api', require('./src/routes')) //Use "wildcard" aceita qualquer requisicao

app.listen(8080);