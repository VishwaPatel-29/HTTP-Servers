const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

//Existing Students:
const students = [
    {
        id: 1,
        name: "Vishwa J Patel",
        branch: "CSE",
        semester: 2,
        cgpa: 9.3
    },
    {
        id: 2,
        name: "Dhruva S Tajapara",
        branch: "CSE",
        semester: 2,
        cgpa: 8.9
    },
    {
        id: 3,
        name: "Dharmi M Patel",
        branch: "CSE",
        semester: 2,
        cgpa: 8.4
    },
    {
        id: 4,
        name: "Vishwa B Patel",
        branch: "CSE",
        semester: 2,
        cgpa: 9.1
    },
    {
        id: 5,
        name: "Kuanl Deshmukh",
        branch: "IT",
        semester: 5,
        cgpa: 7.8
    },
    {
        id: 6,
        name: "Ananya Reddy",
        branch: "CSE",
        semester: 6,
        cgpa: 8.7
    },
    {
        id: 7,
        name: "Vikram Patil",
        branch: "CSE",
        semester: 7,
        cgpa: 8.2
    },
    {
        id: 8,
        name: "Priyanka Nair",
        branch: "AI",
        semester: 7,
        cgpa: 8.2
    },
    {
        id: 9,
        name: "Harsh Mehta",
        branch: "Data Science",
        semester: 5,
        cgpa: 8.0
    },
    {
        id: 10,
        name: "Neha Gupta",
        branch: "CSE",
        semester: 6,
        cgpa: 7.9
    }
];

//Home Route:
app.get("/",(req,res) => {
    res.send("Welcome to Student's CGPA Data:");
});

//Get all Students:
app.get("/students",(req,res) => {
    res.status(200).json(students);
});

//Student With Highest CGPA:
app.get("/students/topper",(req,res) => {
    if(students.length === 0){
        res.status(404).json({message:"Students Not Found:"});
    }
    const topper = students.reduce((max, student) =>
    student.cgpa > max.cgpa ? student : max
    );
    return res.status(200).json(topper);
});

//Average CGPA of all Students:
app.get("/students/average",(req,res) => {
    if(students.length === 0){
        res.status(404).json({message:"Students Not Found:"});
    }
    const total = students.reduce((sum,students) => sum + students.cgpa, 0);
    const average = (total/students.length).toFixed(2);
    return res.status(200).json({
        avarageCGPA: Number(average)
    });
});

//Total Numbers of Students:
app.get("/students/count",(req,res) => {
    return res.status(200).json({
        totalStudents: students.length
    });
});

//Students By Their ID:
app.get("/students/:id",(req,res) => {
    const studentId = Number(req.params.id);
    const student = students.find(s => s.id === studentId);
    if(!student){
        return res.status(404).json({message:"Student Not Found"});
    }
    res.status(200).json(student);
}); 

//Students By Their Branch:
app.get("/students/branch/:branchName",(req,res) => {
    const branchName = req.params.branchName.toLowerCase();
    const studentsBName = students.filter(
        s => s.branch.toLowerCase() === branchName
    );
    return res.status(200).json(studentsBName);
})

app.listen(3000,() => {
    console.log("Server Started on Port 3000");
});

console.log("VisHwa Patel");