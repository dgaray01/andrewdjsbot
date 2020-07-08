var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
 
  
  let texto = args.join(" ");
  var embe = new Discord.RichEmbed()
   .setAuthor("Andrew | Olvido Ejemplo", client.user.avatarURL)
    .setDescription ("Para Olvidar a alguien debes mencionarle")
    .addField("Ejemplo","a!olvido (@mencion)")
    .setColor("RANDOM")
  
  
  if(!texto) return message.channel.send(embe);
    let user = message.mentions.users.first();
  let member = message.mentions.users.first() 
let img = await weez.olvido(member.displayAvatarURL)


  let embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Olvido", client.user.avatarURL)
  .setDescription ("**Pobre **" + user.username + " Quedo en el olvido... ``😭``")
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