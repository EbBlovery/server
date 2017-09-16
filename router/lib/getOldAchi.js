var fetchOldAchi = require('../../lib/fetchOldAchi');
var validateUser = require('./validateUser.js');

async function getOldAchi(req,res,type='cache'){
    var {login} = req.cookies;
    var { username, password} = req.app.locals.user;
	if(type == 'fresh'){
        await fetchFresh(req,res,login)
	}else{
        var {pass} = await validateUser(req,username, password);
        if(pass){
        	console.log(username);
        	var data = await req.app.locals.db.OldAchi.findOne({'username':username}).exec();
        	if(data){
        		var {ret} = data;
                res.json({
                	data: {
                		pass: true,
                		ret,
                		type: 'cache'
                	}
                })
        	}else{
        		await fetchFresh(req,res,login)
        	}
        }else{ 
        	console.log('mimacuowu')
        	res.json({
        		data:{
        			pass:false
        		}
        	})
        }
	}
}

async function fetchFresh(req,res,login){
    var { data } = await fetchOldAchi(req,res,login);
    var { pass, ret } = data;
    var { username } = req.app.locals.user;
    if(pass){
    	 res.json({
    	 	data:{
    	 		pass: true,
        		ret,
        		type: 'cache'
    	 	}
    	 })
         req.app.locals.db.OldAchi.update({ username },{$set: ret},{upsert: true}).exec()
    }else{
    	res.json({
    		data:{
    		    pass:false
    		}
    	})
    }
}

module.exports = getOldAchi;