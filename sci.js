var exp=require('express')
var router=exp.Router()

router.get('/phy',function(req,res)
	{
		res.send('welcome to physics page!')
	})

router.get('/chem',function(req,res)
	{
		res.send('Welcome to Chemistry page!')
	})

router.get('/',function(req,res)
	{
		res.send('Welcome to Science page!')
	})

module.exports=router
