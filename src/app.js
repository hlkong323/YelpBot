var restify = require('restify');
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat bot
var connector = new builder.ChatConnector({
    appId: '340fe3d5-5a1a-4f5f-899d-131767e38e4a',
    appPassword: 'KKHFdKaJgh7DMxTQvrVfT80'
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', function (session) {
    session.send("Hello World");
});
//
/*
var Yelp = require('./node-yelp-fusion');
var consts = require('./consts');
var yelp = new Yelp({ id: consts.CLIENTID, secret: consts.CLIENTSECRET });

yelp.search("term=Biryani&location=New York")
  .then(function (result) {
    const firstResult = result.businesses[0];
    const jsonString = JSON.stringify(firstResult, null, 4);
    console.log(jsonString);
    //
    const bodyObj = JSON.parse(jsonString);
    console.log(bodyObj.name);
  });*/