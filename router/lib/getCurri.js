var fetchUrpCurri = require('../../lib/fetchUrpCurri');

async function getCurri(req,res){
	var {login} = req.cookies;
    var {data} = await fetchUrpCurri(req,res,login);
    var {pass,ret} = data;
    console.log(ret);
    if(pass){
        res.json({
        	data:{
        		pass:true,
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