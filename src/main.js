import {app, BrowserWindow} from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
  if(process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600, title: "Game"});
  mainWindow.loadURL('file://' + __dirname + '/view/index.html');
  mainWindow.setMenu(null);
  
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});