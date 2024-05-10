// const path = require("path");
// const { app, BrowserWindow } = require("electron");

// // Define createWindow function
// function createWindow() {
//     const win = new BrowserWindow({
//         width: 800,
//         height: 600
//     });

//     win.loadFile(path.join(__dirname, "AppCycle.html"));
// }

// // Call createWindow function directly
// createWindow();



// // Example of asynchronous operation (e.g., loading a module)
// initializeObject(function(err, object) {
//     if (err) {
//         console.error('Error initializing object:', err);
//     } else {
//         // Object initialization successful
//         // Now you can access its properties safely
//         if (object && object.whenReady) {
//             // Access the whenReady property
//             object.whenReady();
//         } else {
//             console.error('Object or whenReady property is undefined');
//         }
//     }
// });

// function initializeObject(callback) {
//     // Simulating asynchronous initialization
//     setTimeout(function() {
//         // Assuming object is properly initialized here
//         var object = {
//             whenReady: function() {
//                 console.log('Object is ready');
//             }
//         };
//         // Pass the initialized object to the callback function
//         callback(null, object);
//     }, 1000); // Simulate 1 second delay
// }

const { app, BrowserWindow } = require("electron"); 
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 1000
    });

    win.loadFile(path.join(__dirname, 'AppCycle.html')); 
}

app.whenReady().then(() => {
    createWindow();
});
