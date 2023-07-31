const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if(req.url==='/gethello' && req.method==='GET')
    {
        res.writeHead(200,{"content-type":"text/plain"});
        res.end('Hello Nodejs!!!');
    }else if(req.url==='/' && req.method==='GET')
    {
        res.writeHead(500,{"content-type":"text/plain"});
        res.end('Internal Server Error!!!');;
    }

    fs.readFile('./Pages/q2.html', null, function (err,data) {
        if (err) {
            res.writeHead(404);
            res.write('File not found!!!');
        } else {
            res.write(data);
        }
        res.end();
    });
}).listen(8081);