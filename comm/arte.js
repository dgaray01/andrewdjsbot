var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
 
  
  let texto = args.join(" ");
  if(!texto) return message.channel.send("**Menciona a Alguien [ Ejemplo : c/arte (@mencion) ]**");
  let member = message.mentions.users.first() 
let img = await weez.arte(member.displayAvatarURL)
  
  let embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Pintura", client.user.avatarURL)
  .setDescription ("**Mira este pedaso de obra maestra! ``🎐``**")
  .attachFiles([{
    attachment: img,
    name: "arte.png"
  }])
  .setImage("attachment://arte.png")
  .setColor("RANDOM")
  //
  //message.channel.send({files: [img]});
  message.channel.send(embed);
  message.delete().catch(() => {});
}