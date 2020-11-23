const apiHandler = new CountriesApiHandler()

router.get('/countries', (req, res) => {


    apiHandler
        .getAllCountries()
        .then(response => {
            console.log('los paises son:', response.data)

            res.render('countries/countries-list', { allCountries })
        })
        .catch(err => console.log(err))
});

// document.querySelector('#countryNameButton').onclick = () => {

//     // const inputValue = document.querySelector('#countryNameInput').value

//     apiHandler
//     .getAllCountries()
//     .then(data => console.log('La respuesta es', data))
//     .catch(err => console.log('ERROR!:', err))
// }


// GET COUNTRY
// apiHandler
//     .getOneCountry('spain')
//     .then(data => console.log('La respuesta es', data))
    // .catch(err => console.log('ERROR!:', err))

