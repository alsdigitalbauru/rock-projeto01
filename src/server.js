import http from 'node:http'

const server = http.createServer((req, res)=> {
    return res.end('teste')
})

// localhost porta 3333
server.listen(3333)