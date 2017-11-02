var express=require('express')
var app=express()

app.get('/lv',function(req,res){
	res.sendFile(__dirname+"/WaterLily.html")
})


var server=app.listen(8084,function()
	{
		var host=server.address().address
		var port=server.address().port
		console.log('app is listening')
	})

