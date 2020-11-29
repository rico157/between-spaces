const { app, BrowserWindow, Menu, Tray } = require("electron");
const path = require("path");
const server = require("./server");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

let tray = null;

app.on("ready", () => {
  server.listen(8080, () => console.log("listening"));
  tray = new Tray("/Users/rico/icon.png");
  const contextMenu = Menu.buildFromTemplate([
    { label: "Item1", type: "radio" },
    { label: "Item2", type: "radio" },
    { label: "Item3", type: "radio", checked: true },
    { label: "Item4", type: "radio" }
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
