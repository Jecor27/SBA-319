import express from "express"
import drinks from '../controllers/drinkController.js'

const router = express.Router();

router.get('/', drinks.getAllDrinks);
router.post('/', drinks.creatDrink);

export default router;