const { app, BrowserWindow } = require('electron')

app.disableHardwareAcceleration();
let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 600,
        height: 600
    })


    win.loadURL(`file://${__dirname}/dist/AngularDeskTopApp/SplashScreen.html`)

    setTimeout(function () {
        win.loadURL(`file://${__dirname}/dist/AngularDeskTopApp/index.html`);
    }, 1000);

    //// uncomment below to open the DevTools.
    win.webContents.openDevTools()

    // Event when the window is closed.
    win.on('closed', function () {
        win = null
    })

    win.once('ready-to-show', function () {
        win.show();
    })
}

// Create window on electron initialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // macOS specific close process
    if (win === null) {
        createWindow()
    }
})