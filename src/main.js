import {app, BrowserWindow} from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
  if(process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 1280, height: 720, title: "Game", center: true});
  mainWindow.loadURL('file://' + __dirname + '/view/index.html');
  mainWindow.setMenu(null);
  mainWindow.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});