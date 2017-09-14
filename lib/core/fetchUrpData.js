var request = require('superagent');
var cheerio = require('cheerio');
var charset = require('superagent-charset');
charset(request);

var urpLogin = require('./urpLogin');

async function fetchUrpData(req,res,url){
   var {username,password} = req.body;
   var {data} = await urpLogin(username,password);
   var { cookie, pass } = data;
   console.log(cookie);
   return await request.get(url).set({
   	  "Cookie": cookie,
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Cache-Control": "no-cache"
   }).charset('gbk').then(res=>{
   	   var text = res.text.toString();
   	   var $ = cheerio.load(text,{normalizeWhitespace: true});
   	   console.log(text);
   	   // var ret = analysis($);

   })
}

module.exports = fetchUrpData;