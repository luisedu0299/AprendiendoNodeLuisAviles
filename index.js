var http = require('http');
var server = http.createServer(
    function(request, response){
        response.writeHead(200,{"Content-Type": "text/html"});
        response.write("Hola Mundo");
        response.end();
    });
server.listen(8888,
    function(){
        console.log("ready");
    })
    
