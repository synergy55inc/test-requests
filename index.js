var http = require('http')

http.createServer(function (request, response) {
  console.log(request.method, '  ', request.url);
  var data = '';
  response.writeHead(200)
  request.on('data', function (message) {
    data = data + message;
  })
  request.on('end', function () {
    console.log(data);
    response.write("HELLO WORLD");
    response.end()
    console.log('====================================================');
    console.log('\n');
  })
}).listen(3001)
