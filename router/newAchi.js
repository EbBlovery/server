var getNewAchi = require('./lib/getNewAchi')

async function getUrpNewAchi(req,res){
    var {data} = await getNewAchi(req,res);
    console.log(data)
    res.json({
    	data
    })
}

module.exports = getUrpNewAchi;