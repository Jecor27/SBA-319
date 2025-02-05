import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import 'dotenv/config'
import connectDB from './db.js'

const app = express()

// middleware
app.set('view engine', 'ejs');
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("you hit a route")
    next()
})//showing what route was hit


// routes
// app.use('/drinks', drinkRoutes)
// app.use('/foods', foodRoutes);


// connect to DB and port listening
connectDB(app)