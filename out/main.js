'use strict';

var _electron = require('electron');

var mainWindow = null;

_electron.app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    _electron.app.quit();
  }
});

_electron.app.on('ready', function () {
  mainWindow = new _electron.BrowserWindow({ width: 1280, height: 720, title: "Game" });
  mainWindow.loadURL('file://' + __dirname + '/view/index.html');
  mainWindow.setMenu(null);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});