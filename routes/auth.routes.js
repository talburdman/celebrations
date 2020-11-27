
const express = require("express")
const router = express.Router()
const passport = require("passport")

const User = require("../models/User.model")

const bcryptjs = require("bcryptjs")
const bcryptSalt = 10


// Sing Up Get

router.get("/signup", (req, res) => res.render("auth/signup"))


// Sing Up Post

router.post("/signup", (req, res, next) => {

    const { username, name, description, email, password } = req.body

    if (username === "" || name === "" || description === "" || email === "" || password === "" ) {
        res.render("auth/signup", { errorMsg: "Fill in all the information" })
        return
    }

    User
        .findOne({ username })
        .then(user => {
            if (user) {
                res.render("auth/signup", { errorMsg: "User already exists" })
                return
            }

            // Other Validations
            const salt = bcryptjs.genSaltSync(bcryptSalt)
            const hashPass = bcryptjs.hashSync(password, salt)

            User.create({ username, name, description, email, password: hashPass })
                .then(() => res.redirect('/'))
                .catch(() => res.render("auth/signup", { errorMsg: "Error" }))
        })
        .catch(error => next(error))
})


// Log In Get

router.get("/login", (req, res) => res.render("auth/login", { errorMsg: req.flash("Error") }))


// Log In Post

router.post("/login", passport.authenticate("local", {

    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
}))


// Log Out

router.get('/close', (req, res) => {
    
    req.logout()
    res.redirect("/login")
})


module.exports = router
