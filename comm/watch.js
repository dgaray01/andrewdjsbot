exports.run = (client, message, args) => {
const Discord = require("discord.js");
  
var today = new Date()
let Dia = today.toString().split(" ")[0].concat("day");
let Mes = today.toString().split(" ")[1]
let Año = today.toString().split(" ")[3]

const embed = new Discord.RichEmbed()
.setAuthor("Andrew | Reloj ", client.user.avatarURL)
.setColor(`RANDOM`)
.addField("Hoy Es:", `\`${Dia}\` ,\`${Mes}\` ,\`${Año}\``)
.addField("Hora:", `${today.toString().split(" ")[4]}`)

  .setThumbnail("https://i.pinimg.com/originals/17/fb/39/17fb391f50c4bab9c1dc30623713750c.gif")
.setFooter(message.author.tag, message.author.avatarURL)
message.channel.send({ embed })
    message.react("🕰")   
};