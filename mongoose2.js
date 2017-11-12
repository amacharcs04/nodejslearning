m=require('mongoose')
m.connect('mongodb://user1:Welcome123@ds251985.mlab.com:51985/library',{useMongoClient: true})
db=m.connection

db.once('open',function(){ console.log("we are connected!") } )

kittenSchema=m.Schema({
	name: String })

Kitten=m.model('Kitten',kittenSchema)

mycat=new Kitten()
mycat.name='tiger'

mycat.save(function(err){ console.error(err) })

Kitten.find(function(err,pets) { console.log(pets) } )
