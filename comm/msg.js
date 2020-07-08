const Discord = require("discord.js")
var twilio = require('twilio');
exports.run = (client, message, args) => {
  
var accountSid = 'AC2fbd528675440b585a19b538fb69a53d'; // Your Account SID from www.twilio.com/console
var authToken = '06777e6268da2feb21e0dcccc8ca2a21';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

  
  const phone = args[0]
  let text = args.slice(1).join(' ');
  
  
  if(!phone) return message.reply("Pon un numero de celular EJ: +")
client.messages.create({
    body: text,
    to: phone,  // Text this number
    from: '+12055257218' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
  
            }