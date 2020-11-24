const express = require('express')
const router = express.Router()

router.get("/", (req, res) => res.render("countries/countries-list"))

module.exports = router