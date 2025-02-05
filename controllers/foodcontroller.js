import express from 'express';
import Food from "../models/food.js"


//lets grab all food documents
const getAllFoods = async (req, res) => {
    try{
        const foods = await Food.find()
        res.json(foods);
    }catch (error){
        res.status(500).json({error: 'Failed to grab food'})
    }
}

const createFood = async (req, res) => {
    try{
        const newFood = new Food(req.body);
        await newFood.save();
        res.status(201).json(newFood)
    }catch (error){
        res.status(500).json({error: 'Failed to add foods'})
    }
}

const updateFood = async (req, res) => {
    try {
        const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedFood);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the food' });
    }
};

const deleteFood = async (req, res) => {
    try {
        await Food.findByIdAndDelete(req.params.id);
        res.json({ message: 'Food deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete this delicious food' });
    }
};

export default {
    getAllFoods,
    createFood,
    updateFood,
    deleteFood
}