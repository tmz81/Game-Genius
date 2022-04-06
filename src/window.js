const { BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    frame: false,
  })

  win.loadFile('index.html')
  return win
}

module.exports = createWindow()
