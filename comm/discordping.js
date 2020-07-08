const Discord = require("discord.js");


exports.run = async (client, message) => {

                  
                    const embed = new Discord.RichEmbed()

                      .setAuthor("Andrew | Latencia de API", client.user.avatarURL)
                      .setDescription("**Comprueba tu latencia de la API de discord!** ``📡``")
                      .setColor("RANDOM")
                      .setFooter(message.author.tag, message.author.avatarURL)
                      .setTimestamp(message.createdAt)
                      .addField("Realizando prueba de latencia a la API de discord", "Actualmente la conexión con la API de discord es de **" + `${Math.round(client.ping)}` + "** ms")
                      .setImage("https://support.discordapp.com/hc/en-us/article_attachments/206303208/eJwVyksOwiAQANC7sJfp8Ke7Lt15A0MoUpJWGmZcGe-ubl_eW7zGLmaxMZ80A6yNch-rJO4j1SJr73Uv6Wwkcz8gMae8HeXJBOjC5NEap42dokUX_4SotI8GVfBaYYDldr3n3y_jomRtD_H5ArCeI9g.zGz1JSL-9DXgpkX_SkmMDM8NWGg.gif")

                    message.channel.send({ embed });

            
}