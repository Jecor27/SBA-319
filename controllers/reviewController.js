import Review from '../models/Reviews.js';

const getAllReviews = async (req, res) => {
    const reviews = await Review.find().populate('user').populate('food');
    res.json(reviews);
};

const createReview = async (req, res) => {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
};

export default {
    getAllReviews,
    createReview
}