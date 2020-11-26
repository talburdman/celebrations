const countriesApp = new CountriesApiHandler()

// Get Country Details

getCountry()

function getCountry() {   
    
    const url_string = window.location.pathname
    const countryName = url_string.replace('/countries/details/', '')    

    countriesApp
    
        .getOneCountry(countryName)
        .then(response => {
            
            let country = response.data
            let countryHtml = ''

            country.forEach(elm => {
                countryHtml += `<h2>${elm.name}</h2>
        <hr>
        <div>
        <img src="${elm.flag}" alt="${elm.name}" class="img-flag">
        </div>
        <h4><strong>Capital: </strong> ${elm.capital}</h4>
        <br>
        <h4><strong>Native Name: </strong> ${elm.nativeName}</h4>
        <br>
        <h4><strong>Continent: </strong> ${elm.region}</h4>
        <br>
        <h4><strong>Population: </strong> ${elm.population}</h4>
        <br>
        <h4><strong>Language: </strong> ${elm.languages[0].name}</ha>
        <br>
        <br>
        <h4><strong>Currency: </strong> ${elm.currencies[0].name}</ha>
        <br>`
               
            })

            document.querySelector('#countryDetails').innerHTML = countryHtml

        })
   
    .catch(err => next(err))
}



