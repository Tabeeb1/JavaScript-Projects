import { data } from './data.js';

export function getDataPathParam(data, countryOrContinent, value) {
    if(countryOrContinent === 'country'){
        const filteredData = data.filter(item => item.country.toLowerCase() === value.toLowerCase())
        return filteredData
    }
    else if(countryOrContinent === 'continent'){
        const filteredData = data.filter(item => item.continent.toLowerCase() === value.toLowerCase())
        return filteredData
    }
}
