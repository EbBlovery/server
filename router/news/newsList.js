var request = require('superagent');
var cheerio = require('cheerio');
var getNewsList = require('../../lib/getNewsList');

async function newsList(req,res){
    var url = 'http://www.shou.edu.cn';
    var {data} = await getNewsList(req,res,url);
    if(data){
    	res.json({
    		data
    	})
    }else{
    	res.json({
    		data:'error'
    	})
    }
}


module.exports = newsList;