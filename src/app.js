const { app, BrowserWindow,  } = require ('electron');

function App() {
  const window = require('./window');
  const tray = require('./tray');
}

app.whenReady().then(App);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')app.quit()
})
