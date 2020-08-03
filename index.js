const express = require('express');
const mongose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongose.Promise = global.Promise;

mongose.connect('mongodb://localhost/cafe', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//habilitar routin
app.use('/', routes());

app.listen(3000);