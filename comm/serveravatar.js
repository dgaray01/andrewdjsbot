const Discord = require("discord.js");

exports.run = async (client, message) => {


      let img = message.mentions.users.first()
      if (!img) {


          
                    const embed = new Discord.RichEmbed()

                        .setAuthor("Andrew | Imagen de servidor", client.user.avatarURL)
                        .setDescription("Mira la imagen de este servidor!")
                        .setColor("RANDOM")
                        .addField("Imagen del servidor " + message.guild , "Enlace de la imagen del servidor [``⏩`` Dale Click Aquí ``⏪``](" + message.guild.iconURL + ")")
                        .setTimestamp(message.createdAt)
                        .setImage(message.guild.iconURL)

                    message.channel.send({ embed });
      }}