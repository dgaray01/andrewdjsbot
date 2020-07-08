
var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
let texto = args.join(" ");

if(!texto) return message.channel.send("**Pon alguna Nueva ley! 🧾** **| Por Ejemplo a!trump HailAndrew!**");
  
let trump = await weez.trump(texto)
  
let embed = new Discord.RichEmbed()
.setAuthor ("Andrew | Trump Ley", client.user.avatarURL)
.setTitle("Hizo una Nueva ley ``🧾`` ")
.setColor("RANDOM")
 .attachFiles([{
        attachment: trump,
        name: "img.gif"
      }])
      .setImage("attachment://img.gif")

message.channel.send(embed)
  
}