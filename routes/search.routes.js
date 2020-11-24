const express = require('express')
const router = express.Router()

const Celebration = require('./../models/Celebration.model')


// Celebrations Search

router.get('/search', async (req, res) => {

    const celebrations;
    
    if (req.query.q) {
        Celebrations = await Celebration.find(
            
            {
                $text: {
                    $search: req.query.q
                }
            },
            $score: {$meta: 'textScore'}
        ).sort({
                score: { $meta: 'textScore'}
        });
    }

res.json(celebrations);
})
