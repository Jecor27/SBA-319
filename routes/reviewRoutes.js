import express from 'express'
import reviews from '../controllers/reviewController.js'

const router = express.Router();

router.get('/', reviews.getAllReviews);
router.post('/', reviews.createReview);

export default router;