var http = require("http");
var fs = require("fs");
var path = require("path");

var PORT = process.env.SERVER_PORT || process.env.PORT || 3000;
var ROOT = path.join(__dirname, "out");

var mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".pdf": "application/pdf",
  ".webp": "image/webp",
  ".map": "application/json",
  ".txt": "text/plain",
};

function serveFile(res, filePath, statusCode) {
  fs.readFile(filePath, function (err, content) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      return;
    }
    var ext = path.extname(filePath).toLowerCase();
    var contentType = mimeTypes[ext] || "application/octet-stream";
    res.writeHead(statusCode || 200, { "Content-Type": contentType });
    res.end(content);
  });
}

var server = http.createServer(function (req, res) {
  var url = req.url.split("?")[0];
  var filePath = path.join(ROOT, url);

  fs.stat(filePath, function (err, stats) {
    if (!err && stats.isFile()) {
      serveFile(res, filePath, 200);
    } else if (!err && stats.isDirectory()) {
      serveFile(res, path.join(filePath, "index.html"), 200);
    } else {
      var withHtml = filePath + ".html";
      fs.stat(withHtml, function (err2) {
        if (!err2) {
          serveFile(res, withHtml, 200);
        } else {
          serveFile(res, path.join(ROOT, "404.html"), 404);
        }
      });
    }
  });
});

server.listen(PORT, "0.0.0.0", function () {
  console.log("[Portfolio] Static server running on 0.0.0.0:" + PORT);
});
