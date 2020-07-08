const Discord = require("discord.js")
exports.run = (client, message, args) => {
  var premium = new Discord.RichEmbed()
.setColor(process.env.COLOR)
.setThumbnail(client.user.avatarURL)
.setFooter("Andrew Premium")
.setAuthor("Andrew Info", client.user.avatarURL)
.setDescription("Andrew cuenta con funciones premium, donde podrás encontrar funciones realmente únicas. Tales como: \n -Paneles rotativos » Son canales que cambian de nombre a cada momento, según como quieras, las frases son 100% personalizables. \n -Comandos únicos » Multicolor , Comandos Personalizados, Comandos Liberados!  \n \n 💎 => Para solicitar este paquete, únete a nuestro Discord y contacta con ``@! xilondre#9590 ")
          
          message.author.send(premium).then(message.channel.send("¡La información del bot premium ha sido enviada!"))
}