var fetchOldAchi = require('../../lib/fetchOldAchi');

async function getOldAchi(req,res,type='cache'){
    var {login} = req.cookies;
	if(type == 'fresh'){
        await fetchFresh(req,res,login)
	}else{
        console.log(req.app.locals)
	}
}

async function fetchFresh(req,res,login){
    var { data } = await fetchOldAchi(req,res,login);
    var { pass, ret } = data;
    if(pass){
         req.app.locals.db.oldAchi.update({})
    }
}

module.exports = getOldAchi;