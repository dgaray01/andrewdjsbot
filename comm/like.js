const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://cdn.discordapp.com/attachments/585624709312413696/585646175667879936/1.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646198434562048/2.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646211931963414/3.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646228260388918/4.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646253862551553/5.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646270262149130/6.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646284510199825/7.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646302516346909/8.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646323177488385/9.gif",
                "https://cdn.discordapp.com/attachments/585624709312413696/585646348158763038/10.gif",
                "https://media1.tenor.com/images/9b0d7ce98ac83c415ab15db119a07b9f/tenor.gif",
        
                ]

    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Like This", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Aprueba esto! ``👍🏻``**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send(embed).then(msg => {
        msg.react("👍🏻")
          });
        }                                      