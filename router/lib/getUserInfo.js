var validateUser = require('./validateUser');
var fetchUserInfo = require('../../lib/fetchUserInfo');


async function getUserInfo(req,res,type='cache'){
    var {login} = req.cookies;
    var {username,password} = req.app.locals.user;
    if(type == 'fresh'){
        await getFresh(req,res,login)
    }else{
        var {pass} = await validateUser(req,username,password);
        if(pass){
            var data = await req.app.locals.db.UserInfo.findOne({username});
            if(data){
                var {info} = data;
                res.json({
                	pass:true,
                	type:'cache',
                	info
                })
            }else{
            	await getFresh(req,res,login)
            }
        }else{
            res.json({
            	data: {
            		pass:false
            	}
            })
        }
    }
}


async function getFresh(req,res,login){
	var {username} = req.app.locals.user;
    var {data} = await fetchUserInfo(req,res,login);
    var {pass,ret} = data;
    if(pass){
        req.app.locals.db.UserInfo.update({username},{$set: {'info':ret}},{upsert: true}).exec();
        res.json({
        	data:{
        		pass: true,
        		type: 'fresh',
        		ret
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

module.exports = getUserInfo;