const { app, BrowserWindow, Menu, Tray } = require("electron");
const path = require("path");
const server = require("./server");

const PORT = 8080;

// Get local IP address
require("dns").lookup(require("os").hostname(), function (err, add, fam) {
  console.log(add);
});

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  // mainWindow.webContents.openDevTools();
  app.dock.show();
};
app.on("ready", () => {
  // Set client server
  server.listen(PORT, () => console.log("listening"));

  let tray = null;
  tray = new Tray(__dirname + "/icon.png");

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Get QR code",
      click: () => createWindow()
    }
  ]);
  tray.setToolTip("This is my application.");
  tray.setContextMenu(contextMenu);
});

app.dock.hide();

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    console.log("HELLO");
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
