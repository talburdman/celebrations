const express = require('express')
const router = express.Router()

//List All Countries

router.get("/", (req, res) => res.render("countries/countries-list"))

//Country Details

router.get("/details/country_name", (req, res) => {
    
    const countryName = req.params.country_name

   
        .findById(countryName)
        .then(response => res.render('countries/country-details', response))
        .catch(err => console.log(err))
})

module.exports = router