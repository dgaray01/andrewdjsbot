const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let google = args.slice(0).join('+');

        let link = `https://www.google.com/search?q=` + google;
  
          const error1 = new Discord.RichEmbed()
  .setAuthor("Andrew | Buscar en Google", client.user.avatarURL)
  .setDescription("**Escribe lo que quieres buscar y te dare los resultados!**")
  .setImage("https://cdn.dribbble.com/users/3747/screenshots/5217905/chrome_omnibox-final_sm.gif")
  .setColor("RANDOM")
  .setFooter(message.author.tag, message.author.avatarURL)
  .setTimestamp(message.createdAt)
  
if(!google)return message.channel.send(error1)
  
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
	
    .setColor(0x76d6ff)
    .setTimestamp()
    .setAuthor('Andrew | Google Busqueda', client.user.avatarURL)
	.addField("Palabra Buscada:", `${args.slice(0).join(' ')}`)
	.addField('Link de la Busqueda:', `${link}`)
          
	message.channel.send(embed);
  
}



module.exports.help = {
    name: "google"
}