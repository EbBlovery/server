
async function searchClass(req,res){
    var {keywords} = req.body;
    var data = res.app.locals.db.Subject.find({'$or':[{'kch':keywords},{'kcm':keywords},{'js':keywords}]}).exec();
    if(data){
        res.json({
        	data
        })
    }else{
    	res.json({
    		data:{
    			message:'not found!'
    		}
    	})
    }
}

module.exports = searchClass;