const express = require("express");
const app = express();

app.use(express.json());

// Existing users
const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" }
];

// New users array (FIX: declared this)
const addnewusers = [];

// Home route
app.get("/", (req, res) => {
  res.send("Express server is running");
});

// Get all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// Get single user by id
app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

// Add single user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    role: req.body.role
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: newUser
  });
});

// Add multiple users (IMPROVED VERSION)
app.post("/addnewusers", (req, res) => {
  console.log("Req Body:", req.body);

  // Validate request body
  if (!Array.isArray(req.body)) {
    return res.status(400).json({
      message: "Request body must be an array of users"
    });
  }

  req.body.forEach(user => {
    const newUser = {
      id: user.id,
      name: user.name,
      role: user.role
    };

    addnewusers.push(newUser);
  });

  res.status(201).json({
    message: "Users Added Successfully",
    users: addnewusers
  });
});

//PUT Request
app.put("/users/:id", (req, res) => {
  console.log("body: ",req.body);
  console.log("params: ",req.params)
  const userId = Number(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    id: userId,
    name: req.body.name,
    age: req.body.age,
    role: req.body.role
  };

  res.status(200).json({
    message: "User replaced",
    user: users[index]
  });
});

console.log("VisHwa Patel");

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});