const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

// Search for gifts
router.get('/', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");

        // Initialize the query object
        let query = {};

        // 1. Name filter logic
        if (req.query.name && req.query.name.trim() !== '') {
            query.name = { $regex: req.query.name, $options: "i" };
        }

        // 2. Add other filters
        if (req.query.category) {
            query.category = req.query.category;
        }
        if (req.query.condition) {
            query.condition = req.query.condition; 
        }
        if (req.query.age_years) {
            // Using $lte (Less Than or Equal to) for age
            query.age_years = { $lte: parseInt(req.query.age_years) };
        }

        // 3. Store the results in the 'gifts' constant
        const gifts = await collection.find(query).toArray();

        res.json(gifts);
    } catch (e) {
        next(e);
    }
});

module.exports = router;