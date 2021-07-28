const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const path=require("path");
const imageRouter=require("./src/router/imageRouter");
const expressLayout=require('express-ejs-layouts');

require("./src/config/database");

app.use(express.urlencoded({extended:true}));
app.use(expressLayout);
app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"./src/views"));


app.use("/images",imageRouter);

app.listen(PORT ,()=>{
    console.log(`Server started on the ${PORT} PORT`);
});