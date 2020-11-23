const express = require('express')
const router = express.Router()

const Celebration = require('./../models/Celebration.model')
const User = require('./../models/User.model')

//List all Celebrations
router.get('/', (req, res) => {
//   console.log('el user', req.user)  

    Celebration
        .find().sort({ name: 1})
        .then(allCelebrationsCreated => {
        //    console.log('las celebs son:', allCelebrationsCreated)
            
            res.render('celebrations/celebrations-list', {allCelebrationsCreated, isAdmin: true})
        })
        .catch(err => console.log(err))
});

//Celebration details

router.get('/details/:celebration_id', (req, res) => {

    const celebrationId = req.params.celebration_id

    Celebration
        .findById(celebrationId)
        .then(theCelebration => {
            res.render('celebrations/celebrations-details', theCelebration)
        })
        .catch(err => console.log(err))
});

//Celebrations create new
router.get('/new', (req, res) => res.render('celebrations/celebrations-new'))

router.post('/new', (req, res) => {
    const { name, date, description, traditions, country } = req.body
    
    Celebration
        .create({ name, date, description, traditions, country })
        .then(() => res.redirect('/celebrations'))
        .catch(err => console.log(err))
});

//Delete celebration
router.get('/delete-celebration', (req, res) => {

    const celebrationId = req.query.celebration_id

    Celebration
        .findByIdAndDelete(celebrationId)
        .then(() => res.redirect('/celebrations'))
    .catch(err => console.log(err))
})

//Edit user
router.get('/edit-celebration', (req, res) => {
    const celebrationId = req.query.celebration_id

    Celebration
        .findById(celebrationId)
        .then(celebrationInfo => res.render('celebrations/celebrations-edit', celebrationInfo))
        .catch(err => console.log(err))
})

router.post('/edit-celebration', (req, res) => {
    const celebrationId = req.query.celebration_id

    const { name, date, description, traditions, country } = req.body
      console.log('bla bla: ' , celebrationId)
    Celebration
        .findByIdAndUpdate(celebrationId, { name, date, description, traditions, country })
        .then(() => res.redirect('/celebrations'))
        .catch(err => console.log(err))

    })


module.exports = router