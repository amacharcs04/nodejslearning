mo=require('mongoose')
Schema=mo.Schema
BookSchema=new Schema(
	{
		title: {type: String},
		author: [{type: String}],
		summary: String,
		ISBN: String,
		genre: [String],
		url: String

	})

Book=mo.model('Book',BookSchema)
module.exports=Book
