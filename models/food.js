import mongoose from 'mongoose'
const Schema = mongoose.Schema

const FoodSchema = new Schema({
    name: { type: String, required: true, unique: true },
    ingredients: [
        {
            name: { type: String, required: true },
            amount: { type: String, required: true },
            unit: { type: String }
        }
    ],
    instructions: { type: String, required: true }
});

FoodSchema.index({ name: 1 });

export default mongoose.model('Food', FoodSchema);