const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

//Data:
const states = [
  { 
    id: 1, 
    name: "Andhra Pradesh", 
    population: 49386799, 
    literacyRate: 67.02, 
    annualBudget: 279279, 
    gdp: 14000000 
  },
  { 
    id: 2, 
    name: "Arunachal Pradesh", 
    population: 1383727, 
    literacyRate: 65.38, 
    annualBudget: 28000, 
    gdp: 300000 
  },
  { 
    id: 3, 
    name: "Assam", 
    population: 31205576, 
    literacyRate: 72.19, 
    annualBudget: 122000, 
    gdp: 4500000 
  },
  { 
    id: 4, 
    name: "Bihar", 
    population: 104099452, 
    literacyRate: 61.80, 
    annualBudget: 261885, 
    gdp: 6500000 
  },
  { 
    id: 5, 
    name: "Chhattisgarh", 
    population: 25545198, 
    literacyRate: 70.28, 
    annualBudget: 121500, 
    gdp: 4000000 
  },
  { 
    id: 6, 
    name: "Goa", 
    population: 1458545, 
    literacyRate: 88.70, 
    annualBudget: 25000, 
    gdp: 800000 
  },
  { 
    id: 7, 
    name: "Gujarat", 
    population: 63872399, 
    literacyRate: 78.03, 
    annualBudget: 243965, 
    gdp: 21000000 
  },
  { 
    id: 8, 
    name: "Haryana", 
    population: 25351462, 
    literacyRate: 75.55, 
    annualBudget: 180000, 
    gdp: 9000000 
  },
  { 
    id: 9, 
    name: "Himachal Pradesh", 
    population: 6864602, 
    literacyRate: 82.80, 
    annualBudget: 50000, 
    gdp: 2000000 
  },
  { 
    id: 10, 
    name: "Jharkhand", 
    population: 32988134, 
    literacyRate: 66.41, 
    annualBudget: 110000, 
    gdp: 4500000 
  },
  { 
    id: 11, 
    name: "Karnataka", 
    population: 61095297, 
    literacyRate: 75.36, 
    annualBudget: 275000, 
    gdp: 18000000 
  },
  { 
    id: 12, 
    name: "Kerala", 
    population: 33406061, 
    literacyRate: 94.00, 
    annualBudget: 150000, 
    gdp: 12000000 
  },
  { 
    id: 13, 
    name: "Madhya Pradesh", 
    population: 72626809, 
    literacyRate: 69.32, 
    annualBudget: 240000, 
    gdp: 10000000 
  },
  { 
    id: 14, 
    name: "Maharashtra", 
    population: 112374333, 
    literacyRate: 82.34, 
    annualBudget: 340000, 
    gdp: 35000000 
  },
  { 
    id: 15, 
    name: "Manipur", 
    population: 2855794, 
    literacyRate: 79.85, 
    annualBudget: 32000, 
    gdp: 600000 
  },
  { 
    id: 16, 
    name: "Meghalaya", 
    population: 2966889, 
    literacyRate: 75.48, 
    annualBudget: 30000, 
    gdp: 500000 
  },
  { 
    id: 17, 
    name: "Mizoram", 
    population: 1097206, 
    literacyRate: 91.33, 
    annualBudget: 25000, 
    gdp: 400000 
  },
  { 
    id: 18, 
    name: "Nagaland", 
    population: 1978502, 
    literacyRate: 79.55, 
    annualBudget: 27000, 
    gdp: 500000 
  },
  { 
    id: 19, 
    name: "Odisha", 
    population: 41974218, 
    literacyRate: 72.87, 
    annualBudget: 200000, 
    gdp: 8000000 
  },
  { 
    id: 20, 
    name: "Punjab", 
    population: 27743338, 
    literacyRate: 75.84, 
    annualBudget: 180000, 
    gdp: 11000000 
  },
  { 
    id: 21, 
    name: "Rajasthan", 
    population: 68548437, 
    literacyRate: 66.11, 
    annualBudget: 225000, 
    gdp: 14000000 
  },
  { 
    id: 22, 
    name: "Sikkim", 
    population: 610577, 
    literacyRate: 81.42, 
    annualBudget: 15000, 
    gdp: 200000 
  },
  { 
    id: 23, 
    name: "Tamil Nadu", 
    population: 72147030, 
    literacyRate: 80.09, 
    annualBudget: 300000, 
    gdp: 22000000
  },
  { 
    id: 24,
    name: "Telangana", 
    population: 35003674, 
    literacyRate: 72.80, 
    annualBudget: 290000, 
    gdp: 15000000 
  },
  { 
    id: 25, 
    name: "Tripura", 
    population: 3673917, 
    literacyRate: 87.22, 
    annualBudget: 25000, 
    gdp: 700000 
  },
  { 
    id: 26, 
    name: "Uttar Pradesh", 
    population: 199812341, 
    literacyRate: 67.68, 
    annualBudget: 350000, 
    gdp: 25000000 
  },
  { 
    id: 27, 
    name: "Uttarakhand", 
    population: 10086292, 
    literacyRate: 78.82, 
    annualBudget: 60000, 
    gdp: 3000000 
  },
  { 
    id: 28, 
    name: "West Bengal", 
    population: 91276115, 
    literacyRate: 76.26, 
    annualBudget: 310000, 
    gdp: 16000000 
  }
];

//Home Route:
app.get("/",(req,res) => {
    res.send("Welcome To States Information:");
});

//Get All Data:
app.get("/states",(req,res) => {
    res.status(200).json(states);
});

//Return State with highest GDP:
app.get("/states/highest-gdp", (req, res) => {
  const highest = states.reduce((max, state) =>
    state.gdp > max.gdp ? state : max
  );

  res.status(200).json(highest);
});

//Get States By ID:
app.get("/states/:id",(req,res) => {
    const stateId = Number(req.params.id);
    const state = states.find(s => s.id === stateId);
    if(!states){
        return res.status(404).json({message:"State Not Found:"});
    }
    res.status(200).json(state);
});

//Add a Single State:
app.post("/states",(req,res) => {
    const newState = {
        id: req.body.id,
        name: req.body.name,
        population: req.body.population,
        literacyRate: req.body.literacyRate,
        annualBudget: req.body.annualBudget,
        gdp: req.body.gdp
    };
    states.push(newState);
    res.status(201).json({
        message: "User Created Data",
        states : newState
    });
});

//Replace Entire State Record:
app.put("/states/:id",(req,res) => {
    const id = Number(req.params.id);
    const index = states.findIndex(s => s.id === id);
    if(index === -1){
        return res.status(404).json({message:"State Not Found"});
    }
    if(!req.body || Object.keys(req.body).length === 0){
        return res.status(400)/json({message:"Request Body is missing"});
    }
    const {name,population,literacyRate,annualBudget,gdp} = req.body;
    if(!name || !population || !literacyRate || !annualBudget || !gdp){
        return res.status(400).json({message:"All Fields Are Required"});
    }
    const updatedState = {
        id,
        name,
        population,
        literacyRate,
        annualBudget,
        gdp 
    };
    res.status(200).json({
        message:"State Updates SuccessFully:",
        state : updatedState
    });
});

//Replace Annual Budget Value:
app.put("/states/:id/budget",(req,res) => {
    const id = Number(req.params.id);
    const state = states.find(s => s.id === id);
    if(!state){
        return res.status(404).json({message:"State Not Found"});
    }
    state.annualBudget = req.body.annualBudget;
    res.status(200).json(states);
});

//Replace Population:
app.put("/states/:id/population",(req,res) => {
    const id = Number(req.params.id);
    const state = states.find(s => s.id === id);
    if(!state){
        return res.status(404).json({message:"State Not Found"});
    }
    state.population = req.body.population;
    res.status(200).json(states);
});

//Update literacyRate Only:
app.patch("/states/:id/literacy",(req,res) => {
    const id = Number(req.params.id);
    const state = states.find(s => s.id === id);
    if(!state){
        return res.status(404).json({message:"State Not Found"});
    }
    state.literacyRate = req.body.literacyRate;
    res.status(200).json(states);
});

//Upadete GDP Only:
app.patch("/states/:id/gdp",(req,res) => {
    const id = Number(req.params.id);
    const state = states.find(s => s.id === id);
    if(!state){
        return res.status(404).json({message:"State Not Found"});
    }
    state.gdp = req.body.gdp;
    res.status(200).json(state);
});

//Partial Update Any Field:
app.patch("/states/:id",(req,res) => {
    const id = Number(req.body.id);
    const state = states.find(s => s.id === id);
    if(!state){
        return res.status(404).json({message:"State Not Found"});
    }
    Object.assign(state,req.body);
    res.status(200).json(states);
});

//Delete State By ID:
app.delete("/states/:id",(req,res) => {
    const id = Number(req.params.id);
    const index = states.findIndex(s => s.id === id);
    if(index === -1){
        return res.status(404).json({message:"State Not Found"});
    }
    states.splice(index,1);
    res.status(204).send();
});

//Delete By Name:
app.delete("/states/name/:stateName",(req,res) => {
    const name = req.params.stateName.toLowerCase();
    const index = states.findIndex(
        s => s.name.toLowerCase() === name
    );
    if(index === -1){
        return res.status(404).json({message:"State Not Found"});
    }
    states.splice(index, 1);
    res.status(200).json({message:"State Deleted Successfully"});
});

//Delete low literacsy states:
app.delete("/states/low-literacy/:percentage",(req,res) => {
    const percentage = Number(req.params.percentage);
    const initialLength = states.length;
    for(let i = states.length - 1; i >= 0; i--){
        if(states[i].literacyRate < percentage){
            states.splice(i,1);
        }
    }
    const deletedCount = initialLength - states.length;
    res.status(200).json({ deletedCount });
});

app.listen(3000,() => {
    console.log("Server Started on Port: 3000");
});
console.log("Vishwa Patel");