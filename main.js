var http=require("http")

http.createServer(function(req,res)
	{
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end("hello world!");
		console.log("1 request processed")
	}
).listen(8084);
console.log("server is running")
