const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const studentRouter=require("./routers/student");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(studentRouter);



app.listen(port, (err) => {
  if (!err) {
    console.log(`Successfully started at port ${port}`);
  } else {
    console.log(err);
  }
});
