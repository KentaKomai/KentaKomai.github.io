var http = require('http');
var fs = require('fs');

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
        //TODO:css javascript image等
        //htmlファイルなんでhtml
        res.writeHead(200, {'Content-Type': 'text/html'});　
        res.write(data);
        res.end();
      });

    }).listen(1337, '127.0.0.1');
  }
}

module.exports.server = server;
