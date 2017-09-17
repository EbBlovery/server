var request = require('superagent');
var cheerio = require('cheerio');
var charset = require('superagent-charset');
charset(request);

var urpLogin = require('./urpLogin');

async function fetchUrpData(req,res,url,cookie,analysis){
   // var {username,password} = req.body;
   // var {data} = await urpLogin(username,password);
   // var { cookie, pass } = data;
   // console.log(req.cookies,cookie);
   return await request.get(url).set({
   	  "Cookie": cookie,
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Cache-Control": "no-cache"
   }).charset('gbk').then(res=>{
   	   var text = res.text.toString();
   	   // console.log(text);
   	   var $ = cheerio.load(text,{normalizeWhitespace: true});
   	   var ret = analysis($);
       if(ret){
         return {
             data: {
                 pass: true,
                 ret
             }
         }
       }else{
          return {
             data: {
                 pass: false
             }
          }
       }
   })
}

module.exports = fetchUrpData;