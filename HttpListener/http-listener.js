 http = require('http');
   app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(8891);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
   getStatusUpdate(function(result) {
     var returedData = result
      console.log ('2: ', returedData);
		socket.emit('status', { args: returedData });
	});
	socket.on('disconnect', function () {
		console.log('disconnected');
    });
});


function getStatusUpdate(callback) {
var server = http.createServer(function (request, response) {

	var body = '';

	request.addListener('data', function(chunk){
	  console.log('got a chunk');
	  body += chunk;
	});

	request.addListener('error', function(error){
	  console.error('got a error', error);
	  next(err);
	});

	request.addListener('end', function(chunk){
	  console.log('ended');
	  if (chunk) {
		body += chunk;
	  }
	
	  console.log('1:', body);
	  response.write( body);
	  response.end();
	  
	  callback(body);
	});
  });

port = 8890;
host = '127.0.0.1';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);
};
 

 
 