var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
 
  
  let texto = args.join(" ");
  if(!texto) return message.channel.send("**Menciona a Alguien [ Ejemplo : a!bob (@mencion) ]**");
    let user = message.mentions.users.first();
  let member = message.mentions.users.first() 
let img = await weez.bob(member.displayAvatarURL)


  let embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Bob", client.user.avatarURL)
  .setDescription ( "**Bob a pintado a ** " + user.username  +" ``🎨``")
  .attachFiles([{
    attachment: img,
    name: "bob.png"
  }])
  .setImage("attachment://bob.png")
  .setColor("RANDOM")
  //
  //message.channel.send({files: [img]});
  message.channel.send(embed);
  message.delete().catch(() => {});
}