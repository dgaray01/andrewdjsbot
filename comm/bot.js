const Discord = require("discord.js")
exports.run = (client, message, args) => {
const embed = new Discord.RichEmbed()
    .setAuthor("Andrew | Bot Info", client.user.avatarURL)
   .setDescription("**Informacion sobre el bot**")
	  .addField('🆘 **Soporte del bot**', '[Click aquí](https://discord.gg/yxrNCyw)', true)
    .addField('🔸 **Versión del bot**', '``v2.0 Lite``', true)
    .addField('📚 **Librería**','``discord.js``', true)
    .addField('📝 **Languaje de programación**', '``JavaScript``', true)
  	.addField('🗃  **Prefijo de los comandos**', '``a!``', true)
    .addField("🔰 **Desarolladores**", '<@460314183859175434> ', true)
    .setFooter("Versión v3.7 Lite", client.user.avatarURL)
    .setColor("RANDOM")
    .setTimestamp(message.createdAt)
    .setThumbnail("https://pa1.narvii.com/6903/8466c2f70e9e1cd55e808f628d0b2f5a22ff480dr1-700-700_hq.gif")
message.channel.send(embed);
}
