import { createServer } from 'node:http';
import { getData } from './db.js'
import { sendJSON } from './sendJSON.js'
import { getDataPathParam } from './getDataByPathParams.js'
import { getDataQueryParam } from './getDataByQueryParams.js'

const PORT = 5000

const server = createServer( async (req, res) => {
    const data = await getData()
    let filteredData = data
    const objURL = new URL(req.url, `http://${req.headers.host}`)
    const obj = Object.fromEntries(objURL.searchParams)
    const countryOrContinent = objURL.pathname.toLowerCase()

    if(objURL.pathname === '/' && req.method === 'GET' && Object.keys(obj).length === 0){
        sendJSON(res, 200, data)
    } else if(countryOrContinent.startsWith('/country') && req.method === 'GET' && Object.keys(obj).length === 0){
        let value = countryOrContinent.split('/').pop()
        filteredData = getDataPathParam(data, 'country', value)
        if(filteredData.length === 0){
            sendJSON(res, 200, {'message': 'no such data exists'})
        } else{
            sendJSON(res, 200, filteredData)
        }

    } else if(countryOrContinent.startsWith('/continent') && req.method === 'GET' && Object.keys(obj).length === 0){
        let value = countryOrContinent.split('/').pop()
        filteredData = getDataPathParam(data, 'continent', value)
        if(filteredData.length === 0){
            sendJSON(res, 200, {'message': 'no such data exists'})
        } else{
            sendJSON(res, 200, filteredData)
        }
    } else if(Object.keys(obj).length > 0){
        filteredData = getDataQueryParam(data, obj)
        sendJSON(res, 200, filteredData)

    }  else{
        sendJSON(res, 404, {'error':'data not found'})
    }
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
