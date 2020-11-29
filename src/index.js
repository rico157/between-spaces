const { app, BrowserWindow, Menu, Tray } = require("electron");
const path = require("path");
const server = require("./server");

const PORT = 8080;

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

// Keep the tray icon from disappearing
let tray = null;

app.on("ready", () => {
  // Set client server for mobile controls page
  server.listen(PORT, () => console.log("listening on port " + PORT));

  // Tray logic
  tray = new Tray(__dirname + "/icons/tray-icon.png");

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Get QR code",
      click: () => createWindow()
    },
    {
      label: "Quit",
      click: () => app.quit()
    }
  ]);

  tray.setToolTip("This is my application.");
  tray.setContextMenu(contextMenu);
});

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

app.dock.hide();
