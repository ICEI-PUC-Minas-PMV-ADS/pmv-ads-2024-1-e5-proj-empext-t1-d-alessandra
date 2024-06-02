//import isDev from 'electron-is-dev';
const path = require('path');
const { app, BrowserWindow } = require('electron');
//const isDev = require('electron-is-dev');
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true, 
      enableRemoteModule: false,
    },
  });
  const isDev = process.env.NODE_ENV === 'development'|| process.env.ELECTRON_ENV === 'development';
  
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : 'http://localhost:3000'
  );

  if (!isDev) {
    mainWindow.webContents.openDevTools();
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
