const Discord = require("discord.js");

exports.run = async (client, message,args) => {
  
if(!args) return message.channel.send('Agrege una pregunta para la encuesta.')

const embed = new Discord.RichEmbed()

      .setAuthor('Pregunta:')
      .setDescription('**'+args.join(' ')+'**\n▔▔▔▔▔▔▔▔▔▔▔▔')
      .addField('Opcion 1', '``1️⃣``  Si')
      .addField('Opcion 2', '``2️⃣`` No')
      .setColor(0xff4d4d)
.setThumbnail("https://cdn.dribbble.com/users/822468/screenshots/3034859/switch.gif")
      .setTimestamp()
.setFooter(message.author.tag, message.author.avatarURL)
  message.channel.send(embed).then(async m => {
await m.react("1\u20e3")
await m.react("2\u20e3");
        

});
}
