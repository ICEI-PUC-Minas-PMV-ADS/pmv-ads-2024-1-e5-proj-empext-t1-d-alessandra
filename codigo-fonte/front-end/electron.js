const { app, BrowserWindow } = require('electron');
const path = require('path');
const { exec } = require('child_process');
const net = require('net');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const startUrl = 'http://localhost:3000';

  mainWindow.loadURL(startUrl);

  mainWindow.on('closed', () => (mainWindow = null));
}

function startReactApp() {
  return exec('npm start', { cwd: path.join(__dirname) });
}

function waitForReactApp() {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const client = new net.Socket();
      client.once('connect', () => {
        clearInterval(interval);
        client.end();
        resolve();
      }).once('error', () => {
        client.end();
      }).connect(3000, 'localhost');
    }, 100);
  });
}

app.on('ready', async () => {
  startReactApp();
  await waitForReactApp();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
