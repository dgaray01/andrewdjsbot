var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
 
  
  let texto = args.join(" ");
  if(!texto) return message.channel.send("**Menciona a Alguien [ Ejemplo : a!bart (@mencion) ]**");
    let user = message.mentions.users.first();
  let member = message.mentions.users.first() 
let img = await weez.bart(member.displayAvatarURL)


  let embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Bart", client.user.avatarURL)
  .setDescription ( message.author.username + "** Soño con **" + user.username + " ``😴``")
  .attachFiles([{
    attachment: img,
    name: "bart.png"
  }])
  .setImage("attachment://bart.png")
  .setColor("RANDOM")
  //
  //message.channel.send({files: [img]});
  message.channel.send(embed);
  message.delete().catch(() => {});
}