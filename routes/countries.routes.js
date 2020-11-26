const express = require('express')
const router = express.Router()


//List All Countries

router.get("/", (req, res, next) => res.render("countries/countries-list"))


//Country Details

router.get("/details/:countryname", (req, res, next) => res.render('countries/country-details') )


module.exports = router