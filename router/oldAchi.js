var getOldAchi = require('./lib/getOldAchi');

async function oldAchi(req,res){
    var {data} = await getOldAchi(req,res);
    res.json({
    	data
    })
}

module.exports = oldAchi;