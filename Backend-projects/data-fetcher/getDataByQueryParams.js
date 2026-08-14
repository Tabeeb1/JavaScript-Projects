export function getDataQueryParam(data, obj) {
    let filteredData = data
    
    obj = Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
            key.toLowerCase(), 
            value
        ])
    );
    if('country' in obj){
        filteredData = filteredData.filter(item => item.country.toLowerCase() === obj.country.toLowerCase())
    }
    if('continent' in obj){
        filteredData = filteredData.filter(item => item.continent.toLowerCase() === obj.continent.toLowerCase())
    }
    if('is_open_to_public' in obj){
        filteredData = filteredData.filter(item => item.is_open_to_public === JSON.parse(obj.is_open_to_public))
    }

    return filteredData
}
