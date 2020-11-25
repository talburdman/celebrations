const countriesApp = new CountriesApiHandler()

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
               <a href="/countries/details/${elm.name}" class="list">${elm.name}</a>
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
getCountry()

function getCountry() {
    
    const country = req.params.country

    countriesApp
    
    .getOneCountry(country)
    .then(data => console.log('La respuesta es', data))
    .catch(err => console.log('ERROR!:', err))
}

