'use strict'

import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

let loadingUrl = process.env.NODE_ENV !== 'development' ? `file://${__dirname}/static/loading.html` : 'http://127.0.0.1:9080/static/loading.html'

function createWindow () {
  let loginWin = null

  loginWin = new BrowserWindow({width: 658, height: 493, frame: false, titleBarStyle: 'hiddenInset'})
  loginWin.loadURL(loadingUrl)

  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: false,
    width: 1000,
    show: false,
    backgroundColor: '#FFF',
    icon: process.env.NODE_ENV !== 'development' ? `file://${__dirname}/static/icon.ico` : 'http://127.0.0.1:9080/static/icon.ico'
  })

  mainWindow.loadURL(winURL)
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    if (loginWin) {
      loginWin.hide()
      loginWin = null
    }
  })

  mainWindow.on('closed', () => {
    mainWindow = null
    app.exit()
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
