var request = require('superagent');
async function getUrpLogin(username,password) {
   const url = 'http://urp.shou.edu.cn/loginAction.do';
   return request.post(url).type('form').send({
   	   zjh:username,
   	   mm:password
   }).then((res)=>{
   	   if(res.text.indexOf('errorTop') >= 0){
   	   	   console.log(12313);
           return {
           	  data: {
           	  	 pass:false
           	  }
           }
   	   }else{
		    var cookie=res.headers['set-cookie'][0].split(" ")[0];
            return {
            	data: {
            		pass:true,
            		cookie
            	}
            }
   	   }
   })
}

module.exports = getUrpLogin