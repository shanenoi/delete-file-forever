const server = require('./src/api/server')
const system = require('./src/utils/system');

const serverPort = 3264

localStorage['username'] = require("os").userInfo().username
localStorage['serverPort'] = serverPort

server.run(serverPort)


window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

