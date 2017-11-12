m=require('mongoose')
m.connect('mongodb://user1:Welcome123@ds251985.mlab.com:51985/library',{useMongoClient: true})
db=m.connection
db.once('open',function(){ console.log("we are connected!") } )
