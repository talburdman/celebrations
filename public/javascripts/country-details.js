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
        <p><strong>Capital: </strong> ${elm.capital}</p>
        <br>
        <p><strong>Native Name: </strong> ${elm.nativeName}</p>
        <br>
        <p><strong>Continent: </strong> ${elm.region}</p>
        <br>
        <p><strong>Population: </strong> ${elm.population}</p>
        <br>
        <p><strong>Language: </strong> ${elm.languages[0].name}</p>
        <br>
        <p><strong>Currency: </strong> ${elm.currencies[0].name}</p>
        <br>`
               
            })

            document.querySelector('#countryDetails').innerHTML = countryHtml

        })
   
    .catch(err => next(err))
}



