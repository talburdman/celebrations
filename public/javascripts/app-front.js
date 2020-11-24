const countriesApp = new CountriesApiHandler()
// router.get('/countries', (req, res) => {
updateCountryList()
function updateCountryList() {
    countriesApp
        .getAllCountries()
        .then(response => {
            //    console.log('los paises son:', response.data)
            let allCountries = response.data
            let countriesHtml = ''
            allCountries.forEach(elm => {
                countriesHtml += `<li class="countries">
                <div>
                <p>${elm.name}</p>
                </div>
                </li>`
            })
            document.querySelector('#countriesList').innerHTML = countriesHtml
        })
        .catch(err => console.log(err))
}

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


