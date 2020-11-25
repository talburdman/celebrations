const express = require('express')
const router = express.Router()

const ensureAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', { errorMsg: 'Request denied, please login' })
const checkRole = admittedRoles => (req, res, next) => admittedRoles.includes(req.user.role) ? next() : res.render('auth/login', { errorMsg: 'Request denied, no permissions' })


// Endpoints

router.get('/', (req, res) => res.render('index'))

router.get('/profile', ensureAuthenticated, checkRole(['USER', 'ADMIN']), (req, res) => res.render('profile', { user: req.user, isAdmin: req.user.role.includes('ADMIN') }))



module.exports = router
