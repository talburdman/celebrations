const session = require("express-session")
const bcryptjs = require("bcryptjs")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

const flash = require("connect-flash")          // Error Control

const User = require('./../models/User.model')

module.exports = app => {

    app.use(session({
        secret: "celebrations",
        resave: true,
        saveUninitialized: true
    }))

    passport.serializeUser((user, cb) => cb(null, user._id))

    passport.deserializeUser((id, cb) => {
        User.findById(id, (err, user) => {
            if (err) { return cb(err); }
            cb(null, user);
        })
    })

    app.use(flash())             // Error Control

    passport.use(new LocalStrategy({ passReqToCallback: true }, (req, username, password, next) => {
        User.findOne({ username }, (err, user) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return next(null, false, { message: "User not registered" })
            }
            if (!bcryptjs.compareSync(password, user.password)) {
                return next(null, false, { message: "Wrong password" })
            }
            return next(null, user);
        })
    }))


    app.use(passport.initialize())
    app.use(passport.session())


}
