const Discord = require("discord.js")
exports.run = (client, message, args) => {
  
let id = message.guild.id;
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
  .setAuthor("Andrew | Roles del Servidor", client.user.avatarURL)
    .setTitle('**Lista de roles de:** '+ message.guild.name)
    .setDescription(`${client.guilds.get(id).roles.map(r => r.name).join(", ")}`)
    .setThumbnail("https://static1.squarespace.com/static/53750c9ee4b0bb13e3ccc42d/t/59b302154c0dbf8dc8a14378/1504903713759/construction-roles.gif")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp(message.createdAt)
  message.channel.send(embed)
}