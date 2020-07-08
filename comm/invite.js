const Discord = require("discord.js")
exports.run = (client, message, args) => {
client.generateInvite(["ADMINISTRATOR","MANAGE_CHANNELS","MANAGE_ROLES",
    "MANAGE_MESSAGES","SEND_MESSAGES","CONNECT","BAN_MEMBERS"])
.then(link =>{
    var embed = new Discord.RichEmbed()
    .setAuthor("Andrew | Invita al bot", client.user.avatarURL)
.setDescription("**Invitame a tu servidor!** ``🤖``")
    .addField("**Invitación del bot**``🤖``:", `[Click Aquí](${link})`)
    .setThumbnail("https://cdn.discordapp.com/attachments/597900740551376897/598022945033551910/592754287105277972.png")
    .setColor("RANDOM")
    .setFooter(message.author.tag, message.author.avatarURL)
  .setTimestamp(message.createdAt)
    message.channel.send(embed)
          
});
}


