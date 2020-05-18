const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

//morgan.token('body', (req, res) => JSON.stringify(req.body))

const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})