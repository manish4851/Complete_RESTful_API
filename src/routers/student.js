const express=require("express");
const router=new express.Router();
const Student=require("../models/students");

// router.get("/manish",(req,res)=>{
//     res.send("Whats Upp");
// });

router.get("/students", async (req, res) => {
    try {
      const studentsData = await Student.find();
      res.send(studentsData);
    } catch (e) {
      res.send(e);
    }
  });
  
  router.get("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const studentData = await Student.findById(_id);
      console.log(studentData);
      if (!studentData) {
        return res.status(404).send();
      } else {
        res.send(studentData);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  router.patch("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      res.send(updateStudent);
    } catch (err) {
      res.status(404).send(err);
    }
  });
  
  // router.post("/students",(req,res)=>{
  //     const user=new Student(req.body);
  //     user.save().then(()=>{
  //         res.status(201).send(user);
  //     }).catch((err)=>{
  //             res.status(400).send(err);
  //     });
  // });
  
  router.post("/students", async (req, res) => {
    try {
      const user = new Student(req.body);
      const createUser = await user.save();
      res.status(201).send(createUser);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  router.delete("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const deletedStudent =await Student.findByIdAndDelete(_id);
      if(!deletedStudent){
          return res.status(404).send();
      }
      res.send(deletedStudent);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
module.exports=router;