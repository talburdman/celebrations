const express = require('express')
const router = express.Router()

const Celebration = require('./../models/Celebration.model')
const User = require('./../models/User.model')


// List All Celebrations

router.get('/', (req, res) => {

    Celebration
        .find().sort({ name: 1})
        .then(allCelebrationsCreated => res.render('celebrations/celebrations-list', {allCelebrationsCreated, isAdmin: true}))
        .catch(err => console.log(err))
})


// Celebrations Details

router.get('/details/:celebration_id', (req, res) => {

    const celebrationId = req.params.celebration_id

    Celebration
        .findById(celebrationId)
        .then(theCelebration => res.render('celebrations/celebrations-details', theCelebration))
        .catch(err => console.log(err))
})


// Celebrations Create New Get

router.get('/new', (req, res) => res.render('celebrations/celebrations-new'))


// Celebrations Create New Post

router.post('/new', (req, res) => {

    const { name, date, description, traditions, country } = req.body
    
    Celebration
        .create({ name, date, description, traditions, country })
        .then(() => res.redirect('/celebrations'))
        .catch(err => console.log(err))
})


//Delete Celebration

router.get('/delete-celebration', (req, res) => {

    const celebrationId = req.query.celebration_id

    Celebration
        .findByIdAndDelete(celebrationId)
        .then(() => res.redirect('/celebrations'))
        .catch(err => console.log(err))
})


// Edit For Users Get

router.get('/edit-celebration', (req, res) => {

    const celebrationId = req.query.celebration_id

    Celebration
        .findById(celebrationId)
        .then(celebrationInfo => res.render('celebrations/celebrations-edit', celebrationInfo))
        .catch(err => console.log(err))
})


// Edit For Users Post

router.post('/edit-celebration', (req, res) => {

    const celebrationId = req.query.celebration_id

    const { name, date, description, traditions, country } = req.body
    
    Celebration
        .findByIdAndUpdate(celebrationId, { name, date, description, traditions, country })
        .then(() => res.redirect('/celebrations'))
        .catch(err => console.log(err))

    })


module.exports = router