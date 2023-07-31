const http = require('http');
const fs = require('fs');
const url = require('url');
const static = require('node-static');

const fileServer = new static.Server('./Pages/page.html');

const server = http.createServer((req, res) => {
    var u1 = url.parse(req.url, true);

    if (req.url == "/page.html" && req.method === "GET") {
        var filename = "./Pages/page.html";
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end("404 Page Not Found");
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    else if (u1.pathname == "/get_form" && req.method === "GET") {
        res.write(u1.query.gname + " " + u1.query.gage);
        res.end();
    }
    else if (req.url == "/post_form" && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            res.end('ok  => ' + body);
        });
    }
    else if (req.url == "/page.html" && req.method === 'GET') {
        var filename = "./Pages/page.html";
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 Not Found");
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }

    req.addListener('end', function () {
        fileServer.serve(req, res);
    }).resume();
});
server.listen(8081);

console.log("server listening on 8081");