var getOldAchi = require('./lib/getOldAchi');

async function oldAchi(req,res){
	console.log(app)
    await getOldAchi(req,res);
}

module.exports = oldAchi;