


exports.post_a_level_item = async (req,res) =>{
    try
    {
    
        console.log("Request received");
       return res.status(200).send("Data posted");

    }
    catch(e)
    {
        console.log(e);
        return res.status(400).send(e);
    }
}