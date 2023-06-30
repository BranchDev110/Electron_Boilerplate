const {app, BrowserWindow, Menu} = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  
  win.loadFile('index.html');
  win.setAlwaysOnTop(true);
  win.setIgnoreMouseEvents(true);
}

app.whenReady().then(createWindow);
app.dock.hide();