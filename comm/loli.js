var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let loli = await weez.randomLoli()
  
  let embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Lolis Randoms", client.user.avatarURL)
  .setDescription("*Cuidado con el FBI 🕵️‍*")
  .setImage(loli)
  .setColor("RANDOM")
  
   message.channel.send(embed).then(msg => {
        msg.react("👍").then(r => msg.react("👎"))
    });
}