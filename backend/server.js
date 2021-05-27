const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var routes = require('./routes');
var cors = require("cors");

app.use(cors({origin: true, credentials: true}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'Session Created',
    resave: false,
    saveUninitialized: true,
}));

app.use('/', routes);


app.listen(port, () => console.log(`Listening on port ${port}`));