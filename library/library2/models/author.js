var mo=require('mongoose')
var schema=mongoose.Schema
var AuthorSchema=new schema(
	{
		first_name: {type: String, required: true, max: 100},
		family_name: {type: String, required: true, max: 100},
		date_of_birth: {type: Date},
		date_of_death: {type: Date}
	})
AuthorSchema.virtual('name')
.get(function(){
	return this.family_name+','+this.first_name;
})

module.exports=mo.model('Author',AuthorSchema)
