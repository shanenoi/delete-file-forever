const fs = require('fs');
const UTF8 = 'utf8'
const LIMIT = 32

var ooz = (data) => {
  return data
    .split('')
    .map(item => String.fromCharCode(item & 1))
    .join('')
}

const rm = (filename, _loop_index = 0) => {
  fs.readFile(filename, UTF8, (err, data) => {
    if (err != null) return
    fs.writeFileSync(filename, ooz(data));
    if (_loop_index < LIMIT) {
      rm(filename, _loop_index+1)
    } else {
      fs.writeFile(
        filename,
        '',
        (_) => fs.unlink(filename, () => {})
      );
    }
  })
}

module.exports = { normal: rm }
