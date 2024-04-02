const express = require('express');
const router = express.Router();
const {
    Promotion,
    PromotionCondition,
    PromotionDiscount,
    PromotionProduct,
    PromotionUser
} = require('../models/promotion');


// Get all promotions
router.get('/', async (req, res) => {
    try {
        const promotions = await Promotion.find();
        res.json(promotions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get promotion by ID
router.get('/:id', getPromotion, (req, res) => {
    res.json(res.promotion);
});

// Create a new promotion
router.post('/', async (req, res) => {
    const promotion = new Promotion(req.body);
    try {
        const newPromotion = await promotion.save();
        res.status(201).json(newPromotion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Update promotion
router.patch('/:id', getPromotion, async (req, res) => {
    if (req.body.PromotionName != null) {
        res.promotion.PromotionName = req.body.PromotionName;
    }
    if (req.body.PromotionType != null) {
        res.promotion.PromotionType = req.body.PromotionType;
    }
    // Update other fields as needed

    try {
        const updatedPromotion = await res.promotion.save();
        res.json(updatedPromotion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function to get promotion by ID
async function getPromotion(req, res, next) {
    try {
        const promotion = await Promotion.findById(req.params.id);
        if (!promotion) {
            return res.status(404).json({ message: 'Promotion not found' });
        }
        console.log('Promotion fetched:', promotion); // Log the fetched promotion document
        res.promotion = promotion;
        console.log('Promotion fetched res:', res.promotion);
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// Delete promotion
router.delete('/:id', getPromotion, async (req, res) => {
    try {
        console.log('Promotion fetched res:', res.promotion);
        if (!res.promotion) {
            return res.status(404).json({ message: 'Promotion not found' });
        }
        // Here, you can directly use res.promotion to perform any desired actions
        console.log('Deleting promotion:', res.promotion);
        const promotionId = res.promotion._id;

        // Use the promotion ID to delete the promotion
        const result = await Promotion.deleteOne({ _id: promotionId });
        console.log(' promotion id:', promotionId);
        // Add any additional logic you need for deleting the promotion
        res.json({ message: 'Promotion deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;



const yaml = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const openApiSpecification = yaml.load('./swagger.yaml');


router.get('/swagger', (req, res) => {
    res.json(openApiSpecification);
});


module.exports = router; 
