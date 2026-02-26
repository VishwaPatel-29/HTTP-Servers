const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];

//Home Route:
app.get("/",(req,res) => {
    res.send("Welcome to E-Commerce Data");
});

//Get All Data:
app.get("/products",(req,res) => {
    res.status(200).json(products);
});

//Get Product By ID:
app.get("/products/:id",(req,res) => {
    const productId = Number(req.params.id);
    const product  = products.find(p => p.id === productId);
    if(!product){
        return res.status(404).json({message:"Product Not Found"});
    }
    res.status(200).json(product);
});

//Get Products By Category:
app.get("/products/category/:categoryName",(req,res) => {
    const categoryName = req.params.categoryName;
    const category = products.filter(
        p => p.category.toLowerCase() === categoryName.toLowerCase()
    );
    res.status(200).json(category);
});

//Post:Add a New Product:
app.post("/products",(req,res) => {
    const newProduct = {
        id: req.body.id,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating
    };
    products.push(newProduct);
    res.status(201).json({
        massage: "User Created Product",
        products : newProduct
    });
});

//Replace Entire Product With Put:
app.put("/products/:id",(req,res) => {
    const id = Number(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if(index === -1){
        return res.status(404).json({message:"Product Not Found"});
    }
    if(!req.body || Object.keys(req.body).length === 0){
        return res.status(400).json({message:"Request Body is Missing"});
    }
    const {name,category,price,stock,rating} = req.body;
    if(!name || !category || !price || !stock || !rating){
        return res.status(400).json({message:"All Fields Are Required"});
    }
    const updatedProduct = {
        id,
        name,
        category,
        price,
        stock,
        rating
    };
    res.status(200).json({
        message: "Product Updated SuccessFully",
        product: updatedProduct
    });
});

//Update Only Stock Value With PUT:
app.put("/products/:id/stock",(req,res) => {
    const id = Number(req.params.id);
    const product = products.find(p => p.id === id);
    if(!product){
        return res.status(404).json({message:"Product Not Found"});
    }
    product.stock = req.body.stock;
    res.status(200).json(product);
});

//Update Only Price Value With PUT:
app.put("/products/:id/price",(req,res) => {
    const id = Number(req.params.id);
    const product = products.find(p => p.id === id);
    if(!product){
        return res.status(404).json({message:"Product Not Found"});
    }
    product.price = req.body.price;
    res.status(200).json(product);
});

app.listen(3000,() => {
    console.log("Server Started on Port 3000");
});

console.log("Vishwa Patel")