import express from 'express'
//import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import foodRoutes from "./routes/foodRoutes.js"
import dotenv from 'dotenv';
import connectDB from './db.js'

dotenv.config();
const app = express()

// middleware
app.use(express.json())
//app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("you hit a route")
    next()
})//showing what route was hit


// routes
// app.use('/drinks', drinkRoutes)
// app.use('/foods', foodRoutes);
app.use('/foods', foodRoutes);


// connect to DB and port listening
connectDB(app)