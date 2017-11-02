var express=require('express')
var app=express()

var sci=require('./sci.js')
app.use('/sci',sci)

var middleFunc=function(req,res,next)
{
	console.log("middleware func is called")
	next()
}

app.use(middleFunc)
app.use(express.static("."))
app.get('/pagewithcss',function(req,res)
	{
		res.sendFile(__dirname+"/pagewithcss.html")
	})

var server=app.listen(8084,function()
	{
		var host=server.address().address
		var port=server.address().port
		console.log('app is listening')
	})

