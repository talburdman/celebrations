const express = require('express')
const router = express.Router()

const User = require('./../models/User.model')

const bcryptjs = require("bcryptjs")
const bcryptSalt = 10

//Create User List
router.get('/users-list', (req, res) => {
    

    User
        .find()
        .then(allUsersCreated => {
            
            
            res.render('admin/users-list', {allUsersCreated})
        })
        .catch(err => console.log(err))
});

//User details
router.get('/profile/:user_id', (req, res) => {

    const userId = req.params.user_id

    User
        .findById(userId)
        .then(theUser => {
            res.render('profile', theUser)
        })
        .catch(err => console.log(err))
});
//Delete user
router.get('/delete-user', (req, res) => {

    const userId = req.query.user_id

    User
        .findByIdAndDelete(userId)
        .then(() => res.redirect('/admin/users-list'))
        .catch(err => console.log(err))
});


//para crear nuevo usuario
router.get('/new', (req, res) => res.render('admin/users-new'))

router.post('/new', (req, res) => {
    const { username, name, password, description, role, email } = req.body

    const salt = bcryptjs.genSaltSync(bcryptSalt)
    const hashPass = bcryptjs.hashSync(password, salt)
    
    User
        .create({ username, name, password: hashPass, description, role, email })
        .then(() => res.redirect('/admin/users-list'))
        .catch(err => console.log(err))
});

//Edit
router.get('/edit-user', (req, res) => {
    const userId = req.query.user_id

    User
        .findById(userId)
        .then(userInfo => res.render('admin/users-edit', userInfo))
        .catch(err => console.log(err))
})

router.post('/edit-user', (req, res) => {
    const userId = req.query.user_id

    const { username, name, description, role, email } = req.body
    //  const salt = bcryptjs.genSaltSync(bcryptSalt)
    // const hashPass = bcryptjs.hashSync(password, salt)
        
    User
        .findByIdAndUpdate(userId, { username, name, description, role, email })
        .then(() => res.redirect('/admin/users-list'))
        .catch(err => console.log(err))

    })



module.exports = router