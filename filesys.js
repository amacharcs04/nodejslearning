var fs=require('fs')
fs.unlink('bigboss',function(err)
	{
		if(err) throw err;
		console.log('file deleted');
	});
