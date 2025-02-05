import Review from '../models/Reviews.js';

const getAllReviews = async (req, res) => {
    const reviews = await Review.find().populate('drink').populate('food');
    console.log('Reviews retrieved', reviews)
    res.json(reviews);
};

const createReview = async (req, res) => {
    const newReview = new Review(req.body);
    console.log('Reviews created', newReview)
    await newReview.save();
    res.status(201).json(newReview);
};

export default {
    getAllReviews,
    createReview
}