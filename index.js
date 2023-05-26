const express = require("express");
require("./Database/database");

const Student = require("./models/students");
const StudentRouter = require("./routers/students");
const app = express();
const port = process.env.port || 4000;

app.use(express.json()); 
app.use(StudentRouter);





app.listen(port, () => {
  console.log(`connection is sucessful ${port}`)
});
