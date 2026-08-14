export function sendJSON(res, statuscode, data) {
    res.statusCode = statuscode
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
}
