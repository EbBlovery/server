var fetchUrpCurri = require('../../lib/fetchUrpCurri');
var validateUser = require('./validateUser');

async function getCurri(req,res,type='cache'){
	var {login} = req.cookies;
	var { username,password } = req.app.locals.user;
	if(type=="fresh"){
        await getFresh(req,res,login)
	}else{
        var {pass} = await validateUser(req,username, password);
        if(pass){
            var data = await req.app.locals.db.Curri.findOne({username}).exec();
            if(data){
                var {curri} = data;
                res.json({
                	pass:true,
                	type:'cache',
                	curri
                })
            }else{
            	await getFresh(req,res,login)
            }
        }else{
        	res.json({
        		data:{
        			pass:false
        		}
        	})
        }
	}
}


async function getFresh(req,res,login){
	var {username} = req.app.locals.user;
    var {data} = await fetchUrpCurri(req,res,login);
    var {pass,ret} = data;
    if(pass){
        req.app.locals.db.Curri.update({username},{$set: {'curri':ret}},{upsert: true}).exec();
        res.json({
        	data:{
        		pass:true,
        		ret,
        		type: fresh
        	}
        })
    }else{
    	res.json({
    		data:{
    			pass:false
    		}
    	})
    }

}

module.exports = getCurri;