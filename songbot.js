var Bot = require('ttapi');
var http = require('http');
var AUTH = 'auth+live+ce3553f8c51bb9fa82d0f4015b3df5b3f8c19558';
var USERID = '4e8f82e8a3f75133bd03b870';
var ROOMID = '4ded3b7e99968e1d29000047';
var bot = new Bot(AUTH, USERID, ROOMID);

bot.on('speak', function (data) {
   // Respond to "/hello" command
   console.log(data);
   if (data.text.match("WHO DO YOU FAP FOR?")) {
       
      bot.speak('I FAP FOR YOU ' + data.name + '!!!');
   }
   if (data.text.match("AND I SAY!")) {
   
      bot.speak("VAT THA FAHK");
   }
   if (data.text.match("face down")) {
 
      bot.speak("ass up!");
   }
   var options = {
       host: 'songtracker.vladimirkozyrev.com',
       path: '/catFact/',
       method: 'GET',
   };
   if (data.text.match("/catfact")) {
      
      var req = http.request(options, function(res) {
	      //console.log('STATUS: ' + res.statusCode);
         res.setEncoding('utf8');
         res.on('data', function (chunk) {   
		 //console.log('BODY: ' + chunk);
	    var jsonObject = eval('(' + chunk  +')');
	    bot.speak(jsonObject.catFact);
            //console.log(jsonObject.catFact);
         });
      });
      req.end();
   }
});
