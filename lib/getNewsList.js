var request = require('superagent');
var cheerio = require('cheerio');

async function getNewsList(req,res,u){
    // var {page} = req.body;

    var url = u + 'yw/list' + 1 + '.htm';

    var info = await request.get(url);
    var text = info.text.toString();
    var $ = cheerio.load(text,{normalizeWhitespace: true});
    function analysis($){
    	var list = []
        $('#wp_news_w8').children('a').each(function(){
            list.push({
            	'href': u + $(this).attr('href'),
            	'title':$(this).children('.col_news_title').text().trim(),
            	'time':$(this).children('.col_news_date').text().trim()
            })
        })  
        return list;
    }
    var data = analysis($);
    return {
    	data: data
    }
}

module.exports = getNewsList;