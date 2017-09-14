var getNewAchi = require('./lib/getNewAchi')

async function getUrpNewAchi(req,res){
    var info = await getNewAchi(req,res)
}

module.exports = getUrpNewAchi;