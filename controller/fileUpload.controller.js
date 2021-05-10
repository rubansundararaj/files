const upload = require("../middleware/fileUpload");

const URL = "http://localhost:3000/get-cfiles/";
const fs = require("fs");

const uploadFile = async (req,res) => {

    try{
       // console.log("request received")
        await upload(req,res);

        if(req.file == undefined){
            return res.status(400).send({message : "Choose a file to upload"});
        }
         res.status(200).send({
            message : "File upload successfully" + req.file.originalname,
        });
    }
    catch(e){
        console.log(e);
        if(e.code == "LIMIT_FILE_SIZE")
        {
            return res.satus(500).send({
                message : "File size should be less than 5MB",
            });
        }

        res.status(500).send({
            message: `Error occured: ${e}`,
          });
    }
};

const getFilesList = (req,res) => {
        const path = __basedir + "/public/uploads/";
        fs.readdir(path, function(err, files){
            if(err){
                 res.status(500).send({message : "Files not found"});
            }

            let filesList = [];

            files.forEach((file) => {
                filesList.push({
                    name : file,
                    url : URL + file,
                });
            });

             res.status(200).send(filesList);
        });
    };


  const downloadFiles =  (req,res) => {
        const fileName = req.params.name;
        const path = __basedir + "/public/uploads/";

        res.download(path + fileName,(err) => {
            if(err){
                 res.status(500).send({
                    message : "File cannot be donwloaded: "+ err,
                });
            }
        });
    };

    module.exports = {uploadFile,getFilesList,downloadFiles};
   
