var getOldAchi = require('./lib/getOldAchi');

async function oldAchi(req,res){
	const type = 'cache';
    await getOldAchi(req,res,type);
}

module.exports = oldAchi;