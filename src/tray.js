const { Tray } = require('electron');
const { resolve } = require('path');

const iconPath = resolve(__dirname, 'icon.png');

function createTray() {
  const tray = new Tray(iconPath);
  tray.setToolTip('Genius Game')

  return tray
}

module.exports = createTray();
