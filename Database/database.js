const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Isa-aug")
.then(() => { 
    console.log("connection is sucessful");   
}).catch((err) => {
    console.log("no connection");
})