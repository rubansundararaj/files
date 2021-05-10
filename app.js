const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');
const path = require('path');

global.__basedir = __dirname;

var corsConfig = {
    origin: "http://localhost:3000"
  };
  
app.use(cors(corsConfig));

const evokeRoutes = require('./router/apis');

app.use(express.urlencoded({ 
extended: true 
}));

evokeRoutes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => 
{
    console.log('Running on port ' + port);
});

// Handle error
 
app.use((req, res, next) => {
    setImmediate(() => {
      next(new Error('Error occured'));
    });
  });
  

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

