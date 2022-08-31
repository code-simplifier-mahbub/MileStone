// create countiresData arrow function
// add a rest link and convert a json promise
//call the function
//create displayCountries function for get data in innerHTML
//json convert data share in diplay function parameter name countries
//get the div by ID
// add innerHTML in div and set ther country name
//add a button in the innerHTML and give a onclick even listener and set dynamic country code for get a dynamic country detail in the loadCountryDetail call function
//create loadCountryDetail function and add a parameter (code) to get loadCountryDetail button value
// add a rest country code link and make code dynamic by (${code}) 
//make url a json promise convert and call it and add a function call name countryDetail and value there data value by index order
//create function countryDetail and give a parameter to get data value from parents function
// get another div for add country parameter value in innerHTML
// in innerHTML set country name and flags 





const countriesData = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

countriesData();

const displayCountries = countries => {
    const containerCountries = document.getElementById('container-countries');
    countries.forEach(country =>{

        const divCountry = document.createElement('div')
        divCountry.classList.add('look')
        divCountry.innerHTML = `
        <h2>countryName:${country.name.common}</h2>
        <p>countryCapital:${country.capital ? country.capital[0] : 'no capital'}</p>
        <button onclick = "loadCountryDetail('${country.cca2}')">Displey Detail</button>
        `;

        containerCountries.appendChild(divCountry);
    })
}

const loadCountryDetail = (code) => {
    console.log(code)
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => countryDetail(data[0]))
    
    
}

const countryDetail = country =>{
    // console.log(country)
    const countryInfo = document.getElementById('display-country');
    countryInfo.innerHTML = `
        <h3>Country Name: ${country.name.common}</h3>
        <img src = "${country.flags.png}">
    `;
}


