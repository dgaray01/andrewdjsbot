exports.run = async (client, message, args) => {
const Discord = require('discord.js')
const Kiz = require('kiz')
let texto = args.join(' ') 
 
var imagen = await Kiz.sedijo(texto)
var attachment = new Discord.Attachment(imagen, 'sedijo.png')

   var embed = new Discord.RichEmbed()
     .setAuthor("Andrew | Se Dijo", "https://images-ext-2.discordapp.net/external/mWXAXuhZXCpM62hmnFI0YK_OCqMc8uYOLAG518ekZnE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
      .setColor("RANDOM")
     .setDescription ("**``🐣`` El Pollito pio ya dijo **")
      .attachFiles([{
        attachment: imagen,
        name: "sedijo.png"
      }])
      .setImage("attachment://sedijo.png")
 .setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
 
message.channel.send(embed)
}