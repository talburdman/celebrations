const express = require('express')
const router = express.Router()

const ensureAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', { errorMsg: 'Request denied, please login' })
const checkRole = admittedRoles => (req, res, next) => admittedRoles.includes(req.user.role) ? next() : res.render('auth/login', { errorMsg: 'Request denied, no permissions' })

const Celebration = require('./../models/Celebration.model')
const User = require('./../models/User.model')


// List All Celebrations

router.get('/', (req, res, next) => {

    Celebration
        .find({}, { name: 1, _id: 1, image: 1 })
        .sort({ name: 1 })
        .then(allCelebrationsCreated => res.render('celebrations/celebrations-list', {allCelebrationsCreated}))
        .catch(err => next(err))
})


// Celebrations Search

router.post('/search', (req, res, next) => {

    let festivity = req.body.celebrationName
    let regex = new RegExp(festivity, "i")

    Celebration.find({ $or: [{ name: regex }, { description: regex }, { traditions: regex }, { country: regex }] })
        .then(returnedCelebrations => {
            res.render("celebrations/celebrations-details-search", { returnedCelebrations })
        })
        .catch(err => next(err))

})

// Celebrations Details

router.get('/details/:celebration_id', (req, res, next) => {

    let isAdmin = false
    
    if (req.user) {
        let userRole = req.user.role  
        if (userRole === "ADMIN") {
            isAdmin = true
        } 
    } 
    
    const celebrationId = req.params.celebration_id

    Celebration
        .findById(celebrationId)
        .then(theCelebration => res.render('celebrations/celebrations-details', { theCelebration, isAdmin }))
        .catch(err => next(err))
})


// Celebrations Create New Get

router.get('/new', ensureAuthenticated, checkRole(['USER', 'ADMIN']), (req, res, next) => res.render('celebrations/celebrations-new'))


// Celebrations Create New Post

router.post('/new', (req, res, next) => {

    const { name, date, description, traditions, country } = req.body
    
    Celebration
        .create({ name, date, description, traditions, country })
        .then(() => res.redirect('/celebrations'))
        .catch(err => next(err))
})


//Delete Celebration

router.get('/delete-celebration', (req, res, next) => {

    const celebrationId = req.query.celebration_id

    Celebration
        .findByIdAndDelete(celebrationId)
        .then(() => res.redirect('/celebrations'))
        .catch(err => next(err))
})


// Edit Celebrations Get

router.get('/edit-celebration', ensureAuthenticated, checkRole(['ADMIN']), (req, res, next) => {

    const celebrationId = req.query.celebration_id

    Celebration
        .findById(celebrationId)
        .then(celebrationInfo => res.render('celebrations/celebrations-edit', celebrationInfo))
        .catch(err => next(err))
})


// Edit Celebrations Post

router.post('/edit-celebration', (req, res, next) => {

    const celebrationId = req.query.celebration_id

    const { name, date, description, traditions, country, links } = req.body
    
    Celebration
        .findByIdAndUpdate(celebrationId, { name, date, description, traditions, country, links })
        .then(() => res.redirect('/celebrations'))
        .catch(err => next(err))

    })


module.exports = router