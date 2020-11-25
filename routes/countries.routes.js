const express = require('express')
const router = express.Router()


//List All Countries

router.get("/", (req, res, next) => res.render("countries/countries-list"))

//Country Details

router.get("/details/country_name", (req, res, next) => {
    
    const countryName = req.params.country_name

        .findById(countryName)
        .then(response => res.render('countries/country-details', response))
        .catch(err => next(err))
})

module.exports = router