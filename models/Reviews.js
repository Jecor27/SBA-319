import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    drink: { type: mongoose.Schema.Types.ObjectId, ref: 'drink', required: true },
    food: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String }
});
ReviewSchema.index({ user: 1 });
ReviewSchema.index({ food: 1 });
ReviewSchema.index({ drink: 1 });
ReviewSchema.index({ rating: -1 });

export default mongoose.model('Review', ReviewSchema);
