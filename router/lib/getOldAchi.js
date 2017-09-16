var fetchOldAchi = require('../../lib/fetchOldAchi');
var validateUser = require('./validateUser.js');

async function getOldAchi(req,res,type='cache'){
    var {login} = req.cookies;
	if(type == 'fresh'){
        await fetchFresh(req,res,login)
	}else{

	}
}

async function fetchFresh(req,res,login){
    var { data } = await fetchOldAchi(req,res,login);
    var { pass, ret } = data;
    if(pass){
         req.app.locals.db.oldAchi.update({})
    }else{
    	res.json({
    		data:{
    		    pass:false
    		}
    	})
    }
}

module.exports = getOldAchi;