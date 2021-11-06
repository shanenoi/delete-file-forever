const express = require('express')
const system = require('../utils/system');
const rm = require('../utils/rm');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/sudo/login', (req, res) => {
  res.send(JSON.stringify(
    system.checkRootPassword(req.body.username, req.body.password)
  ))
})

app.post('/sudo/rm-normal', (req, res) => {
  req.body.files.forEach(file => rm.normal(file))
  data = "Xóa thành công"
  res.send(JSON.stringify({ data }))
})

app.post('/sudo/rm-gutmann', (req, res) => {
  req.body.files.forEach(file => rm.gutmann(file))
  data = "Xóa thành công"
  res.send(JSON.stringify({ data }))
})

const run = (port) => {
  app.listen(port, () => {
    console.log(`server on at http://localhost:${port}`)
  })
}

module.exports = { run }
