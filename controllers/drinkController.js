import drink from "../models/drink.js"

const getAllDrinks = async (req, res) => {
    const drinks = await drink.find();
    res.json(drinks);
}

const creatDrink = async (req, res) => {
    const newDrink = new drink(req.body);
    await newDrink.save();
    res.status(201).json(newDrink);
}

export default {
    getAllDrinks,
    creatDrink
}