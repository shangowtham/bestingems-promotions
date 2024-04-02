const mongoose = require('mongoose');

// Promotion Schema
const promotionSchema = new mongoose.Schema({
    PromotionID: {
        type: Number,
        required: true,
        unique: true
    },
    PromotionName: {
        type: String,
        required: true
    },
    PromotionType: String,
    StartDate: {
        type: Date,
        required: true
    },
    EndDate: {
        type: Date,
        required: true
    },
    Description: String,
    IsActive: {
        type: Boolean,
        default: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt: Date
});

// Promotion Condition Schema
const promotionConditionSchema = new mongoose.Schema({
    ConditionID: {
        type: Number,
        required: true,
        unique: true
    },
    PromotionID: {
        type: Number,
        ref: 'Promotion',
        required: true
    },
    ConditionType: String,
    ConditionValue: String,
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt: Date
});

// Promotion Discount Schema
const promotionDiscountSchema = new mongoose.Schema({
    DiscountID: {
        type: Number,
        required: true,
        unique: true
    },
    PromotionID: {
        type: Number,
        ref: 'Promotion',
        required: true
    },
    DiscountType: String,
    DiscountValue: String,
    MaxDiscountAmount: Number,
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt: Date
});

// Promotion Product Schema
const promotionProductSchema = new mongoose.Schema({
    ProductID: {
        type: Number,
        ref: 'Product',
        required: true
    },
    PromotionID: {
        type: Number,
        ref: 'Promotion',
        required: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt: Date
});

// Promotion User Schema
const promotionUserSchema = new mongoose.Schema({
    UserID: {
        type: Number,
        required: true,
        unique: true
    },
    PromotionID: {
        type: Number,
        ref: 'Promotion',
        required: true
    },
    UserName: String,
    Email: String,
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt: Date
});

// Define models based on the schemas
const Promotion = mongoose.model('Promotion', promotionSchema);
const PromotionCondition = mongoose.model('PromotionCondition', promotionConditionSchema);
const PromotionDiscount = mongoose.model('PromotionDiscount', promotionDiscountSchema);
const PromotionProduct = mongoose.model('PromotionProduct', promotionProductSchema);
const PromotionUser = mongoose.model('PromotionUser', promotionUserSchema);

module.exports = {
    Promotion,
    PromotionCondition,
    PromotionDiscount,
    PromotionProduct,
    PromotionUser
};