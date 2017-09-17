
var fetchUrpAchi = require('../../lib/fetchNewAchi');

async function getNewAchi(req,res){
	var {login} = req.cookies;
    var {data} = await fetchUrpAchi(req,res,login);
    var { pass, ret } = data;
    if(pass){
    	res.json({
	    	data:{
	    		ret
	    	}
	    })
    }else{
    	res.json({
    		data:{
    			pass:false
    		}
    	})
    }
    
}

module.exports = getNewAchi;