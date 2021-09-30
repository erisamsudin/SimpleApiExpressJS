//import express
import express from "express";
//import mongoose
import mongoose from "mongoose";
// import routes
import search from "./routes/search.js";
import searchdetail from "./routes/searchdetail.js";

//import cors
import cors from "cors";
// construct express function
const app = express();


app.use(cors());
app.use(express.json());
app.use('/search',search);


app.use(cors());
app.use(express.json());
app.use('/detail',searchdetail);

// listening to port
app.listen('3000',()=> console.log('Server Running at port: 3000'));