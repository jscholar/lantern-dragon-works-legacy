const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer( function(req, res) {
    let filePath;

    if (req.url == "/" || !req.url.match(/\.[^/]+/)) {
        // Catch requests to routes and serve index
        filePath = "./dist/index.html";
    } else {
        // Serve the requested file
        filePath = "./dist" + req.url;
    }

    const extname = String(path.extname(filePath)).toLowerCase();

    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            res.end("404 not found");
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf-8');
        }
    })
    
}).listen(3000);

console.log("Server started on port 3000");
