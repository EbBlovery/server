var fetchUrpCurri = require('../../lib/fetchUrpCurri');

async function getCurri(req,res){
	var {login} = req.cookies;
    var {data} = fetchUrpCurri(req,res,login);
    var {pass,ret} = data;
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

module.exports = getCurri;