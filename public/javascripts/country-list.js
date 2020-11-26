const countriesApp = new CountriesApiHandler()

//Get Countries From API

updateCountryList()

function updateCountryList() {

    countriesApp
        
        .getAllCountries()
        .then(response => {
            
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

