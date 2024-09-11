// Create web server
// Create a server object:
http.createServer(function (req, res) {
  // Parse the URL of the request
  var q = url.parse(req.url, true);
  // Get the file name
  var filename = "." + q.pathname;
  // Read the file
  fs.readFile(filename, function(err, data) {
    // If there is an error
    if (err) {
      // Send a 404 error message
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    // Write the file to the response
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);