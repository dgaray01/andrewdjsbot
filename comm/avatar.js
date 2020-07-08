const Discord = require("discord.js");

exports.run = async (client, message) => {

      let img = message.mentions.users.first()
      if (!img) { 
                    const embed = new Discord.RichEmbed()

                        .setAuthor("Andrew | Tu Avatar", client.user.avatarURL)
                        .setDescription("Mira tu Avatar esta genial!")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .addField("Avatar de " + message.author.tag, "Enlace de tu Avatar [``⏩`` Dale Click Aquí ``⏪``](" + message.author.avatarURL + ")")
                        .setTimestamp(message.createdAt)
                        .setImage(message.author.avatarURL)

                    message.channel.send({ embed });
      

      } else if (img.avatarURL === null) {
        
        

          message.reply("a **" + img.username + "** le da vergüenza mostrarse al público y no tiene avatar!");
                
    

      } else {

         
                  
                    const embed = new Discord.RichEmbed()

                        .setAuthor("Andrew | Avatar del usuario", client.user.avatarURL)
                        .setDescription("Mira ese avatar hermoso!")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .addField("Avatar de " + img.tag, "Enlace de su Avatar [``⏩`` Dale Click Aquí ``⏪``](" + img.avatarURL + ")")
                        .setTimestamp(message.createdAt)
                        .setImage(img.avatarURL)

                    message.channel.send({ embed });
      }
}