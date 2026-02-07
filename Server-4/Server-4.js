const express = require("express");

const app = express();

const users =  [
    {"studentName": "vishwa J Patel", "University": "SUxCG 702", "UniversityUID": 108615},
    {"studentName": "dhruva Tajapara", "University": "SUxCG 714", "UniversityUID": 108568},
    {"studentName": "vishwa B Patel", "University": "SUxCG 702", "UniversityUID":109046},
    {"studentName": "dharmi Patel", "University": "SUxCG 702", "UniversityUID": 108587},
    {"studentName": "mahi", "University": "SUxCG 714", "UniversityUID": 108566}
];

//Home Route
app.get("/", (req, res) => {
  res.send("CodingGita Students Data");
});

//All Students Route
app.get("/cg/students/", (req, res) => {
  res.status(200).json(users);
});

//Get Students By Name
app.get("/cg/students/name/:studentName", (req, res) => {
  const studentName = req.params.studentName.toLowerCase();
  const user = users.find(u => u.studentName.toLowerCase() === studentName);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

//Get Students by Their University UID
app.get("/cg/students/:UniversityUID", (req, res) => {
  const userId = Number(req.params.UniversityUID);
  const user = users.find(u => u.UniversityUID === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});
app.use(express.json());

//Post Request
app.post("/users/", (req, res) => {
  const newUser = [
    {
      studentName: req.body.studentName,
      University: req.body.University,
      UniversityUID: users.length + 1
    }]
  users.push(newUser);
  console.log("newUser", newUser);
  res.status(201).json({
    message: "User created",
    user: newUser
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

console.log("VisHwa Patel Here!");