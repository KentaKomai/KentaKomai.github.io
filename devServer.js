import http from 'http';
import fs from 'fs';

// HTTP server for Development
var server = {
  run: function(){
    http.createServer(function (req, res) {

      var htmlFile = req.url != '/' ? req.url : "/index.html";

      fs.readFile(__dirname + htmlFile , 'utf-8', function(err, data){
        if(err){　//err=trueならNot Foundを返します。
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write( htmlFile + " is Not Found");
          return res.end();　
        }
        if(htmlFile.endsWith("js")){
          res.writeHead(200, {'Content-Type': 'application/javascript' });　
        }
        else if(htmlFile.endsWith("css")){
          res.writeHead(200, {'Content-Type': 'text/css'});　
        }
        else if(htmlFile.endsWith("html")){
          res.writeHead(200, {'Content-Type': 'text/html'});　
        }
        else if(htmlFile.endsWith("jpg") || htmlFile.endWith("jpeg")){
          res.writeHead(200, {'Content-Type': 'image/jpeg'});　
        }
        else if(htmlFile.endsWith("png")){
          res.writeHead(200, {'Content-Type': 'image/png'});　
        }
        else if(htmlFile.endsWith("gif")){
          res.writeHead(200, {'Content-Type': 'image/gif'});　
        }
        res.write(data);
        res.end();
      });

    }).listen(1337, '127.0.0.1');
  }
}
export default server;
