var getNewAchi = require('./lib/getNewAchi')

async function getUrpNewAchi(req,res){
    var {data} = await getNewAchi(req,res);
    res.json({
    	data
    })
}

module.exports = getUrpNewAchi;