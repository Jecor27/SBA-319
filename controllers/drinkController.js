import drink from "../models/drink.js"

const getAllDrinks = async (req, res) => {
    const drinks = await drink.find();
    console.log('Drinks retrieved', drinks)
    res.json(drinks);
}

const creatDrink = async (req, res) => {
    const newDrink = new drink(req.body);
    console.log('Drinks created', newDrink)
    await newDrink.save();
    res.status(201).json(newDrink);
}

export default {
    getAllDrinks,
    creatDrink
}