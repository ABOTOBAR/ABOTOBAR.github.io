const loadCountryAPI = () =>{
    // fetch url som jag tog från rest countries
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

// det här vissar länderna 
const displayCountries = countries =>{
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country));
    // Det är för div som jag har i min html
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

// Det här hämtar datan från html
const getCountry = (country) =>{
    console.log(country)
    return `
        <div class="country-div">
        <img src="${country.flags.png}">
        <h2>${country.name.common}</h2>
        <hr>
        <h4>Population: ${country.population}</h4>
        <h4>Regoin: ${country.region}</h4>
        <h4>Capital: ${country.capital}</h4>
        </div>
    `
}

// Det här är en funktion så att search baren ska funka 

function searchCountries() {
    
    const input = document.getElementById('searchInput').value.toUpperCase();
    const countries = document.querySelectorAll('.country-div');
    
    countries.forEach(country => {
        const name = country.querySelector('h2');
        const countryName = name.textContent.toUpperCase();
        

        if (countryName.includes(input)) {
            country.style.display = '';
        } else {
            country.style.display = 'none';
        }
    });
}




// kallar funktionen för att få output
loadCountryAPI()