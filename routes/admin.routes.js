const express = require('express')
const router = express.Router()

const User = require('./../models/User.model')

const bcryptjs = require("bcryptjs")
const bcryptSalt = 10


// Create User List

router.get('/users-list', (req, res, next) => {
    

    User
        .find({}, { username: 1 })
        .sort({ username: 1 })
        .then(allUsersCreated => res.render('admin/users-list', {allUsersCreated}))
        .catch(err => next(err))
})


// // User Details

// router.get('/profile/:user_id', (req, res) => {
// console.log(req.user)
//     const userId = req.params.user_id

//     User
//         .findById(userId)
//         .then(theUser =>  res.render('profile', theUser))
//         .catch(err => console.log(err))
// })


// Delete User

router.get('/delete-user', (req, res, next) => {

    const userId = req.query.user_id

    User
        .findByIdAndDelete(userId)
        .then(() => res.redirect('/admin/users-list'))
        .catch(err => next(err))
})


// Create New User Get

router.get('/new', (req, res) => res.render('admin/users-new'))


// Create New User Post

router.post('/new', (req, res, next) => {
    const { username, name, password, description, role, email } = req.body

    const salt = bcryptjs.genSaltSync(bcryptSalt)
    const hashPass = bcryptjs.hashSync(password, salt)
    
    User
        .create({ username, name, password: hashPass, description, role, email })
        .then(() => res.redirect('/admin/users-list'))
        .catch(err => next(err))
})


// Edit User Get

router.get('/edit-user', (req, res, next) => {
    const userId = req.query.user_id

    User
        .findById(userId)
        .then(userInfo => res.render('admin/users-edit', userInfo))
        .catch(err => next(err))
})


// Edit User Post

router.post('/edit-user', (req, res, next) => {
    const userId = req.query.user_id

    const { username, name, description, role, email } = req.body
    //  const salt = bcryptjs.genSaltSync(bcryptSalt)
    // const hashPass = bcryptjs.hashSync(password, salt)
        
    User
        .findByIdAndUpdate(userId, { username, name, description, role, email })
        .then(() => res.redirect('/admin/users-list'))
        .catch(err => next(err))

    })


module.exports = router