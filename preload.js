var child_process = require('child_process');

function systemSync(cmd) {
  var result = {
    code: 0,
    message: "",
    response: "",
  }
  try {
    result.response = child_process.execSync(cmd).toString();
  } 
  catch (error) {
    result.code = error.status;
  }
  return result
};

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

localStorage['username'] = require("os").userInfo().username

const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(systemSync("pwd")))
})

app.listen(port, () => {
  console.log(`server on at http://localhost:${port}`)
})
