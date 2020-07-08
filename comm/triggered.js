  const Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')
exports.run = async (nearby, message, args, client) => {

  let miembro = message.mentions.users.first()
  let mbed = new Discord.RichEmbed()
   .setAuthor("Andrew | Triggered Ejemplo","https://images-ext-2.discordapp.net/external/mWXAXuhZXCpM62hmnFI0YK_OCqMc8uYOLAG518ekZnE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  .setColor("RANDOM")
  .setDescription("Te daremos ejemplos de Triggered!")
  .addField("Ejemplo : "," **a!triggered (@Mencion)**")
  .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38ccfaa6-2694-456a-95f4-84386ece7d47/dbvrpgh-a33a4aac-418c-40b7-894e-4d760dedfce2.gif")
   .setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  
  if (!miembro) return message.channel.send(mbed)
    let img = await weez.triggered(miembro.displayAvatarURL);
     var embed = new Discord.RichEmbed()
     .setAuthor("Andrew | Triggered", "https://images-ext-2.discordapp.net/external/mWXAXuhZXCpM62hmnFI0YK_OCqMc8uYOLAG518ekZnE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
      .setColor("RANDOM")
     .setDescription ("**``😡`` El Usuario **"+ message.mentions.users.first() + " **Se Enojo**")
      .attachFiles([{
        attachment: img,
        name: "img.gif"
      }])
      .setImage("attachment://img.gif")
 .setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
    message.channel.send(embed);
    message.delete().catch(() => {});
}