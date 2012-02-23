var bots = [];
var AUTH = 'auth+live+ce3553f8c51bb9fa82d0f4015b3df5b3f8c19558';
var USERID = '4e8f82e8a3f75133bd03b870';
var ROOMID = '4ded3b7e99968e1d29000047';
var songbot = require('./songbot');

var newBot = new songbot.initBot(AUTH, USERID, ROOMID);