var express=require('express')
var app=express()

var sci=require('./sci.js')
app.use('/sci',sci)


var server=app.listen(8084,function()
	{
		var host=server.address().address
		var port=server.address().port
		console.log('app is listening')
	})

