const childProcess = require('child_process');

const systemSync = (cmd) => {
  var result = {
    code: 0,
    message: "",
    response: "",
  }
  try {
    result.response = childProcess.execSync(cmd).toString();
  } 
  catch (error) {
    result.code = error.status;
  }
  return result
};

const checkRootPassword = (_, password) => {
  var result = systemSync(`echo "${password}" | sudo -S echo 123`)
  return result.code == 0 
}

module.exports = { systemSync, checkRootPassword }
