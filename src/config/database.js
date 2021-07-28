const mongoose=require("mongoose");

mongoose.connect(process.env.MONGODB ,{useCreateIndex:true, useFindAndModify:false, useNewUrlParser: true,useUnifiedTopology: true})
                .then(()=>console.log("Bağlanıldı"))
                .catch(err=>console.log("Hata Çıktı"+err));