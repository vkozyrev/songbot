var Bot = require('ttapi')
  , http = require('http')
  , speak
  , songbot
  , initBot
  ; 

speak = function (data) {
  
   console.log(data.name + ": " + data.text);
   if (data.text.match("/djs") || data.text.match("/catfact")) {
      
      var options = {
            host: 'songtracker.vladimirkozyrev.com',
            path: '/catFact/',
            method: 'GET',
      };
      var req = http.request(options, function (res) {
         
         res.setEncoding('utf8');
         res.on('data', function (chunck) {
            
            var jsonObject = eval('(' + chunck  +')');
            songbot.speak(jsonObject.catFact);
         });
      });
      req.end();
   }
};

initBot = function (auth, userid, roomid) {
   
   songbot = new Bot(auth, userid, roomid);
   songbot.on('speak', function (data) {
      
      speak(data);
   });
   return songbot;
};

module.exports.initBot = initBot;