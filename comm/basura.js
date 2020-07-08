var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
let texto = args.join(" ");
let member = message.mentions.users.first() 
let img = await weez.basura(member.displayAvatarURL)
  
let embed = new Discord.RichEmbed()
.setAuthor (message.author.tag,message.author.avatarURL)
.setTitle("Encontro una basura 🚯")
.setColor("RANDOM")


message.channel.send({files: [img]})
message.channel.send(embed)
  
}