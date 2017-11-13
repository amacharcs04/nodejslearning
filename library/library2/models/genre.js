mo=require('mongoose')
GenreSchema=mo.Schema(
	{
		name: String,
		url: String
	})

module.exports=mo.model('Genre',GenreSchema)
