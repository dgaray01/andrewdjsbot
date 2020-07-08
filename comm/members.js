const Discord = require("discord.js");


exports.run = async (client, message) => {

                  
                    const embed = new Discord.RichEmbed()
                      .setAuthor("Andrew | Miembros del Servidor", client.user.avatarURL)
                      .setDescription("**Mira la cifra de usuarios dentro de este servidor!**")
                      .setColor("RANDOM")
                      .setFooter(message.author.tag, message.author.avatarURL)
                      .setTimestamp(message.createdAt)
                      .setThumbnail(message.guild.iconURL)
                      .addField("Calculando los miembros actuales del servidor **" + message.guild + "**", "Hay actualmente **" + message.guild.memberCount + "** miembros en el servidor")
                     .setImage("https://cdn.dribbble.com/users/679372/screenshots/3893057/infografika_unight_3.gif")

                    message.channel.send({ embed });

              
}