/**
 * Created by jperezsl on 5/18/17.
 */

const {app} = require('electron')
const {BrowserWindow} = require('electron')

app.on('ready', function(){
    var mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })


    // Load a remote URL
    //mainWindow.loadURL('https://github.com')

    // Or load a local HTML file
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})