var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
 
  
  let texto = args.join(" ");
  let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Kiss Ejemplo", client.user.avatarURL)
  .setDescription ( "**Escribe un Logro que quieras desbloquear!**")
  .addField("Ejemplo : ", "**a!logro (@Mencion)**")
  .setImage("https://imgur.com/uveUpUq.png")
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  

  if(!texto) return  message.channel.send(embud);

let img = await weez.logro(texto)
  
  let embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Logros Xbox", client.user.avatarURL)
  .setDescription ("**``🏆`` Desbloqueaste un Logro**")
  .attachFiles([{
    attachment: img,
    name: "logro.png"
  }])
  .setImage("attachment://logro.png")
  .setColor("RANDOM")
  //
  //message.channel.send({files: [img]});
  message.channel.send(embed);
  message.delete().catch(() => {});
}