const { findOne } = require("../model/imageModel");
const User = require("../model/imageModel");

const showImages= async(req,res)=>{
    try {
        const images = await getImagesFromDb();
        if(images){
            return res.render("index",{layout:"./layout/imageLayout.ejs",body:images});
        }
        res.redirect("/images");
    } catch (error) {
        
    }
}

const getIdImage= async(req,res)=>{
    try {
        const findImage = await getImagesFromDb(req.params.id);
        if(findImage){
            return res.render("image",{layout:"./layout/imageLayout.ejs" , imageData:findImage});
        }
        res.redirect("/images");
    } catch (error) {
        
    }
}

const saveImage = async (req,res)=>{
    try {
        if(!req.body.name || !req.body.url){
           res.redirect("/images");
        }
        const addUser = new User(req.body);
        const result = await addUser.save();
        if(result){
            console.log("Veriler Başarıyla kaydedildi");
            res.redirect("/images");
        }
    } catch (error) {
        console.log("Veriyi Kadederken hata oluştu");
    }
}

const deleteImage = async (req,res) =>{
    try {
        const deleteImage = await User.deleteOne({_id:req.params.id});
        if(deleteImage){
            console.log("Başarıyla silme işlemi gerçekleşti");
            const images = await getImagesFromDb();
            res.redirect("/images");
        }
    } catch (error) {
        
    }

}

const updateImage = async (req,res)=>{
    const id = req.params.id

    try {
        const findImageData= await getImagesFromDb(id);
        if(findImageData){

            const result = await User.findByIdAndUpdate(id,req.body);
            if(result){
                res.redirect(`/images/${id}`);
            }else{
                console.log("İşlem gerçekleştirilemedi");
            }

        }else{
            console.log("Resim Bulunamadı");
        }
    } catch (error) {
        
    }
}

const getImagesFromDb= async (value=undefined)=>{
    try {
        if(!value){
            return await User.find({}).sort({_id:-1})
            
        }else{
            return await User.findOne({_id:value});
    
        }
    } catch (error) {
        
    }
}


module.exports = {
    showImages,
    saveImage,
    deleteImage,
    getIdImage,
    updateImage
}