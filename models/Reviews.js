import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    drink: { type: mongoose.Schema.Types.ObjectId, ref: 'drink', required: true },
    food: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String }
});

export default mongoose.model('Review', ReviewSchema);
