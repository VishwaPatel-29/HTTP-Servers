const express = require("express");
const app = express();
app.use(express.json());

//Users:
const students = [
    {attendence:'80%', uid:108615, total_sub:14, bonus:'20%', name:"Vishwa"},
    {attendence:'75%', uid:108568, total_sub:14, bonus:'25%', name:"Dhruva"},
    {attendence:'90%', uid:109017, total_sub:14, bonus:'10%', name: "Vishwa"},
    {attendence:"82%", uid:108665, total_sub:14, bonus:'10%', name:"Dharmi"}
];

app.get("/",(req,res) => {
    res.send("Welcom to Student Data:");
});

//Get all Students:
app.get("/students",(req,res) => {
    res.status(200).json(students);
});

//Get Single Student by UID:
app.get("/students/:uid",(req,res) => {
    const studentId = Number(req.params.uid);
    const student = student.find(s => s.uid === studentId);

    if(!student){
        return res.status(404).json({message:"Student Not Found:"});
    }

    res.status(200).json(students);
});

//Add a Single Student
app.post("/student", (req,res) => {
    const newStudent = {
        attendence: req.body.attendence,
        uid: req.body.uid,
        total_sub: req.body.total_sub,
        bonus: req.body.bonus,
        name: req.body.name
    };

    students.push(newStudent);

    res.status(201).json({
        message: "User Created Data",
        students : newStudent
    });
});

//Edit Single User Details
app.put("/students",(req,res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.json({
        message:"User Replaced",
        students
    });
});

//PATCH:
app.patch("/students/:uid", (req,res) => {
    const studentUID = Number(req.params.uid);
    const student = students.find(s => s.uid == studentUID);

    if(!student){
        return res.status(404).json({message:"Student Not Found"});
    }
    if(req.body.uid) students.name = req.body.name;
    if(req.body.uid) students.uid = req.body.uid;
    res.status(200).json({
        message:"User Updated",
        students
    });
});

console.log("VisHwa Patel");

app.listen(3000,() => {
    console.log("Server Started on port 3000");
});