exports.run = (client, message, args) => {
const Discord = require("discord.js");
let id = message.guild.id;
const embed = new Discord.RichEmbed()
    .setColor("#363843")
    .setAuthor(message.author.username, message.author.avatarURL)
.setTitle('Canales En Este Server:')
    .setDescription("`"+client.guilds.get(id).channels.map(r => r.name).join(", ")+"`")
    .setTimestamp()
    .setThumbnail(message.guild.iconURL)
    .setFooter(message.guild.name, client.user.avatarURL)
    
message.channel.send({embed});
}