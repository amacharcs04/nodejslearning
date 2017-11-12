m=require('mongoose')
m.connect('mongodb://user1:Welcome123@ds251985.mlab.com:51985/library',{useMongoClient: true})
db=m.connection

db.once('open',function(){ console.log("we are connected!") } )

bookSchema=m.Schema({
	bookname: String, author: String })

Book=m.model('d',bookSchema)

book1=new Book({bookname: "a mind for numbers", author: "barbara oakley" })

book1.save(function(err){ console.error(err) })

Book.find(function(err,books) { console.log(books) } )
