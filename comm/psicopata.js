var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
 
  
  let texto = args.join(" ");
  if(!texto) return message.channel.send("**Menciona a Alguien [ Ejemplo : a!psicopata (@mencion) ]**");
    let user = message.mentions.users.first();
  let member = message.mentions.users.first() 
let img = await weez.psicopata(member.displayAvatarURL)


  let embed = new Discord.RichEmbed()
  .setAuthor("Andrew | psicopata", client.user.avatarURL)
  .setDescription (  user.username + " **Es un psicopata **" +" ... ``😨``")
  .attachFiles([{
    attachment: img,
    name: "psicopata.png"
  }])
  .setImage("attachment://psicopata.png")
  .setColor("RANDOM")
  //
  //message.channel.send({files: [img]});
  message.channel.send(embed);
  message.delete().catch(() => {});
}