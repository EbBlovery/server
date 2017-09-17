var getNewAchi = require('./lib/getNewAchi')

async function getUrpNewAchi(req,res){
    await getNewAchi(req,res);
    
}

module.exports = getUrpNewAchi;