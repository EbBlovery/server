var User = require('./data.js');

function insert(){
    var user = new User({
    	username: 'trancy grady',
    	userpwd: 'abcd',
    	userage: 34,
    	logindate: new Date()
    })

    user.save(function(err,res){
        if(err){
        	console.log('Error' + err)
        }else{
        	console.log('res: ' + res)
        }
    })
}

insert()