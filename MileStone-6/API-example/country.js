// create a arrow function



const countriesData = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const containerCountries = document.getElementById('container-countries');
    countries.forEach(country =>{

        const divCountry = document.createElement('div')
        divCountry.innerHTML = `
        <h2>countryName:${country.name.common}</h2>
        <p>countryCapital:${country.capital ? country.capital[0] : 'no capital'}</p>
        `;
        containerCountries.appendChild(divCountry);
    })
}