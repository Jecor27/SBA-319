import express from 'express';
import food from '../controllers/foodcontroller.js'
const router = express.Router();

router.get('/', food.getAllFoods);
router.post('/', food.createFood);
router.patch('/:id', food.updateFood);
router.delete('/:id', food.deleteFood);


export default router