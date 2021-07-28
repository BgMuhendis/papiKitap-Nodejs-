const User = require("../model/imageModel");
const showImages= (req,res,next)=>{
    res.render("index", {layout:"./layout/imageLayout.ejs",title:"Resimler"});
}
const postImages =(req,res,next)=>{
        console.log(req.body.name);
        res.render("index",{layout:"./layout/imageLayout.ejs"})
    
}
module.exports = {
    showImages,
    postImages
}