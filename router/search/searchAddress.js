async function searchAddress(req,res){
    const {keywords} = req.body;
    var data = await req.app.locals.db.Address.find({'$or':[{'name':keywords},{'position':keywords}]}).exec()
    if(data){
        res.json({
        	data:{
        		data
        	}
        })
    }else{
    	res.json({
    		'data':'不存在'
    	})
    }
}

module.exports = searchAddress