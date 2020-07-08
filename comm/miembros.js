
exports.run = async (client, message, args) => {
const Discord = require ('discord.js')

let estadosuser = {
  "online": "<a:LioOnline:572445663313395713> **Online**",
  "idle": "<a:LioAusente:572445925063262229> **Ausente**",
 "dnd": "<a:LioNoMolestar:572445787401748490> **No Molestar**", 
"offline": "<a:plexiOffline:599445680502603786> **Offline**"
};


  const embed = new Discord.RichEmbed()
		.setAuthor("Andrew | Miembros del Servidor", client.user.avatarURL)
		.setColor('RANDOM')
		.setThumbnail(client.user.avatarURL)
		.addField('``👥`` Miembros', `**${message.guild.memberCount}**` + " **Miembros en Total**", true)
		.addBlankField(true)
		.addField('``👪`` Humanos', `**${message.guild.members.filter(member => !member.user.bot).size}**` +" **Humanos en Total**" , true)
		.addField('``🤖`` Bots', `**${message.guild.members.filter(member => member.user.bot).size}**` + " **Robots en Total**  ", true)
	
	message.channel.send(embed);
                                               }                                                

