var express=require('express')
var app=express()

app.get('/lv',function(req,res){
	res.send("<h1>Water Lily</h1>")
})


var server=app.listen(8084,function()
	{
		var host=server.address().address
		var port=server.address().port
		console.log('app is listening')
	})

console.log("started")
