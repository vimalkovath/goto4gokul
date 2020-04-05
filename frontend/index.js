
const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);




app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/Gotothechange/index.html'));
});


console.log("Server running at http://localhost:%d", port);
