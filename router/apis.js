
var express = require('express');
var apirouter = express.Router();

const controller = require("../controller/fileUpload.controller");

//apirouter.post('/upload_a_file',controller.uploadFile);
let routes = (app) => {
    
    apirouter.post('/upload-file',controller.uploadFile);
    
    apirouter.get("/files",controller.getFilesList);

    apirouter.get("/files/:name",controller.downloadFiles)

    app.use(apirouter);

};

module.exports = routes;