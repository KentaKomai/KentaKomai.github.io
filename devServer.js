import http from 'http'
import fs from 'fs'

// HTTP server for Development
var server = {
  run: function(){
    http.createServer(function (req, res) {

      var htmlFile = req.url != '/' ? req.url : '/index.html'
      var readType = 'utf-8'

      if(htmlFile.endsWith('jpg') || htmlFile.endsWith('jpeg')){
        readType = 'binary'
      }
      else if(htmlFile.endsWith('png')){
        readType = 'binary'
      }
      else if(htmlFile.endsWith('gif')){
        readType = 'binary'
      }

      fs.readFile(__dirname + htmlFile , readType, function(err, data){
        if(err){
          res.writeHead(404, {'Content-Type': 'text/plain'})
          res.write( htmlFile + ' is Not Found')
          return res.end()
        }
        if(htmlFile.endsWith('js')){
          res.writeHead(200, {'Content-Type': 'application/javascript' })
          res.write(data)
        }
        else if(htmlFile.endsWith('css')){
          res.writeHead(200, {'Content-Type': 'text/css'})
          res.write(data)
        }
        else if(htmlFile.endsWith('html')){
          res.writeHead(200, {'Content-Type': 'text/html'})
          res.write(data)
        }
        else if(htmlFile.endsWith('jpg') || htmlFile.endsWith('jpeg')){
          res.writeHead(200, {'Content-Type': 'image/jpeg'})
          res.write(data, 'binary')
        }
        else if(htmlFile.endsWith('png')){
          res.writeHead(200, {'Content-Type': 'image/png', 'Content-Length': data.length})
          res.write(data, 'binary')
        }
        else if(htmlFile.endsWith('gif')){
          res.writeHead(200, {'Content-Type': 'image/gif'})
          res.write(data, 'binary')
        }else{
          res.writeHead(200, {'Content-Type': 'text/plain'})
          res.write(data)
        }
        res.end()
      })

    }).listen(1337, '127.0.0.1')
  }
}
export default server
