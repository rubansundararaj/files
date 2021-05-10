var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/compxyz',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true 
    })