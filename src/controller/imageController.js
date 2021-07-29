const User = require("../model/imageModel");
const showImages= async(req,res,next)=>{
    const images = await getImagesFromDb();
    if(images){
      return res.render("index", {layout:"./layout/imageLayout.ejs" , body:images});
    }
    res.render("index", {layout:"./layout/imageLayout.ejs"});
}

const saveImage = async (req,res,next)=>{
    try {
        if(!req.body.name || !req.body.url){
           return res.render("index",{layout:"./layout/imageLayout.ejs"});
        }
        const addUser = new User(req.body);
        const result = await addUser.save();
        if(result){
            const images = await getImagesFromDb();
            console.log("Veriler Başarıyla kaydedildi");
            return res.render("index", {layout:"./layout/imageLayout.ejs" , body:images});

        }
    } catch (error) {
        console.log("Veriyi Kadederken hata oluştu");
    }
}
const getImagesFromDb= async()=>{
    const images= await User.find({});
    return images

}
module.exports = {
    showImages,
    saveImage
}