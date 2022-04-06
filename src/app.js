const { app, BrowserWindow,  } = require ('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    frame: false,
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => createWindow());

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0)createWindow()
})
