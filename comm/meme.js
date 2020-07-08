var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let meme = await weez.randomMeme()
  
  let embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Memes Randoms", client.user.avatarURL)
  .setDescription("**Disfruta de los memes!**")
  .setImage(meme)
  .setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setColor("RANDOM")
  
  message.channel.send(embed)
  
}

//let canal = message.guild.channels.find(c => c.name === "nombredelcanal")

//Tu código.

//canal.send(reportEmbed)