
var fetchUrpAchi = require('../../lib/fetchNewAchi');

async function getNewAchi(req,res){
	var {login} = req.cookies;
    return await fetchUrpAchi(req,res,login);
}

module.exports = getNewAchi;