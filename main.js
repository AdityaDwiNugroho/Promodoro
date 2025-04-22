const {app, BrowserWindow, screen} = require('electron')

var mainWindow

function createWindow () {
  const display = screen.getPrimaryDisplay()
  const { width, height } = display.workAreaSize

  const winWidth = 300
  const winHeight = 40

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 300,
    height: 40, 
    transparent: true,
    frame:false,
    resizable: false,
    x: width - winWidth,
    y: height - winHeight,
    skipTaskbar: true,
    focusable: false
  })

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/template/index.html`)
  mainWindow.setAlwaysOnTop(true, 'screen-saver');
  mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true })
  mainWindow.setFullScreenable(false);


  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  mainWindow.setAlwaysOnTop(true, 'floating');
  mainWindow.setVisibleOnAllWorkspaces(true);
  mainWindow.setFullScreenable(false);
  setInterval(function(){ 
    mainWindow.setAlwaysOnTop(true, 'floating');
    mainWindow.setVisibleOnAllWorkspaces(true);
  }, 5 * 1000); // every 5 seconds make it always on top
}

app.on('ready', () => {
  console.log(process.pid);
  createWindow()
})
