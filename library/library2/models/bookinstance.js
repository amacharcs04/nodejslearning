mo=require('mongoose')
BookInstanceSchema=mo.Schema(
	{
		book: {type: this.Object},
		imprint: String,
		status: {type: String, enum={"available","not available"}},
		due_back: Date,
		url: String
	})

module.exports=mo.model('BookInstance',BookInstanceSchema)
