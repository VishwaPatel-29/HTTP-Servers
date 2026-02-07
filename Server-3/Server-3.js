const express = require("express");
const app = express();

const students = [
    { gr_no: 109046, name: "vishwa B", class: 702 },
    { gr_no: 108615, name: "vishwa J", class: 702 },
    { gr_no: 108568, name: "dhruva", class: 714 },
    { gr_no: 108566, name: "mahi", class:714},
    { gr_no: 108691, name: "dharmi", class: 702 }
];

app.get("/", (req, res) => {
    res.send("Codinggita Students Data");
});

// GET ALL USERS
app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// GET STUDENT BY GR NUMBER
app.get("/students/gr/:gr_no", (req, res) => {
    const grNo = Number(req.params.gr_no);
    const student = students.find(u => u.gr_no === grNo);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
});

// GET STUDENT BY NAME
app.get("/students/name/:name", (req, res) => {
    const name = req.params.name.toLowerCase();
    const student = students.find(u => u.name.toLowerCase() === name);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
});

// GET STUDENT BY CLASS
app.get("/students/classo/:class",(req,res) => {
    const classNo = Number(req.params.class);
    const student = students.find(u => u.class === classNo);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

console.log("Vishwa Patel");