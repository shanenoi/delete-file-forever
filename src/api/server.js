const express = require('express')
const system = require('../utils/system');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/sudo/login', (req, res) => {
  var result = 
  res.send(JSON.stringify(
    system.checkRootPassword(req.body.username, req.body.password)
  ))
})

const run = (port) => {
  app.listen(port, () => {
    console.log(`server on at http://localhost:${port}`)
  })
}

module.exports = { run }
