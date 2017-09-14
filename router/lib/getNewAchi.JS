
var fetchUrpAchi = require('../../lib/fetchNewAchi');

async function getNewAchi(req,res){
	var {login} = req.cookies;
    var {data} = await fetchUrpAchi(req,res,login);
    res.json({
    	data
    })
}

module.exports = getNewAchi;