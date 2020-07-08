const Discord = require("discord.js");


exports.run = async (client, message) => {

                  
                    const embed = new Discord.RichEmbed()
                      .setAuthor("Andrew | Ping", client.user.avatarURL)
                      .setDescription("**Mira Tu Ping en este servidor de discord!**")
                      .setColor("RANDOM")
                      .setFooter(message.author.tag, message.author.avatarURL)
                      .setTimestamp(message.createdAt)
                      .addField("Realizando prueba de ping a " + message.author.username, "Tienes actualmente **" + `${Date.now() - message.createdTimestamp}` + "** ms en el servidor de **" + message.guild + "**")
                      .setImage("https://cdn.dribbble.com/users/482851/screenshots/2925978/pingpong.gif")

                    message.channel.send({ embed });

}