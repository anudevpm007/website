const next = require("next"); // Next.js core module
const https = require("https"); // Built-in HTTPS module for secure server
const fs = require("fs"); // Built-in FS (File System) module to read files

// Define whether to run the app in development or production
const dev = process.env.NODE_ENV !== "production"; // Checks if it's in dev mode

// Initialize the Next.js app, passing in the dev flag
const app = next({ dev });

// Create a request handler for Next.js
const handle = app.getRequestHandler();

// Prepare the Next.js app
app.prepare().then(() => {
  // Create an HTTPS server using SSL certificates
  https
    .createServer(
      {
        key: fs.readFileSync("/etc/letsencrypt/live/astraliva.com/privkey.pem"), // SSL private key
        cert: fs.readFileSync("/etc/letsencrypt/live/astraliva.com/fullchain.pem"), // SSL certificate
      },
      (req, res) => {
        // Pass all requests to Next.js's request handler
        handle(req, res);
      }
    )
    .listen(1122, (err) => {
      if (err) throw err;
      console.log("> Server running at https://localhost:1122");
    });
});
