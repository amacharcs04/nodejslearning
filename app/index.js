var app=require('express')()
app.get('/',function(req,res)
	{
		res.send('hi world')
	})

app.listen(8085,function(){
	console.log("server is listening at 8085")
})


