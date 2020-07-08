const Discord = require("discord.js");
const dg = require('discord-gestor');

exports.run = async (client, message) => {

  
  let invite = await message.channel.createInvite({maxAge: 0});
  

                  
                    const embed = new Discord.RichEmbed()

                      .setAuthor("Andrew | Invitación de servidor", client.user.avatarURL)
                      .setDescription("**Invita a todos tus amigos o amigas a este maravilloso servidor!**")
                      .setColor("RANDOM")
                      .setFooter(message.author.tag, message.author.avatarURL)
                      .setTimestamp(message.createdAt)
                      .setThumbnail(message.guild.iconURL)
                      .addField("Invitación Instantánea (Permanente) ", invite)
                     .setImage("https://thumbs.gfycat.com/WellinformedHarshEidolonhelvum-size_restricted.gif")

                    message.channel.send({ embed });

}