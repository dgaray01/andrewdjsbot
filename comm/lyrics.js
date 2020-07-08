const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let musica = args.slice(0).join('+');

        let link = `https://www.musica.com/letras.asp?q=` + musica;
  
          const error1 = new Discord.RichEmbed()
  .setAuthor("Andrew | Buscar en Letra", client.user.avatarURL)
  .setDescription("**Escribe lo que quieres buscar y te dare los resultados!**")
  //.setImage("https://cdn.dribbble.com/users/3747/screenshots/5217905/chrome_omnibox-final_sm.gif")
  .setColor("RANDOM")
  .setFooter(message.author.tag)
  .setTimestamp(message.createdAt)
  
if(!musica)return message.channel.send(error1)
  
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
	
    .setColor(0x76d6ff)
    .setTimestamp()
    .setAuthor('Andrew | Letra')
	.addField("Cancion:", `${args.slice(0).join(' ')}`)
	.addField('Link:', `${link}`)
          
	message.channel.send(embed);
  
}