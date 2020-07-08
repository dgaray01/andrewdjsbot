 const Discord = require("discord.js");


exports.run = async (client, message) => {

  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  const rolesList = message.guild.roles.map(e=>e.toString()).join(" ");

                  
                    const embed = new Discord.RichEmbed()
                      
                      .setAuthor("Andrew | Servidor", client.user.avatarURL)
                      .setDescription("**Mira Todo la informacion de este servidor**")
                      .setColor("RANDOM")
                      .setFooter(message.author.tag, message.author.avatarURL)
                      .setTimestamp(message.createdAt)
                      .setThumbnail(message.guild.iconURL)
                      .addField("``📟`` Nombre del servidor", message.guild, true)
                      .addField("``👑`` Dueño", message.guild.owner, true)
                      .addField("``📲`` Fecha de Creación", message.guild.createdAt, true)
                      .addField("``🆔`` ID", message.guild.id, true)
                      .addField("``🌎`` Region del Servidor", message.guild.region)
                      .addField("``👥`` Miembros", message.guild.memberCount, true)
                      .addField("``🌐`` Miembros Online", message.guild.members.filter(m => m.presence.status === 'online').size || "¡No hay nadie Online!", true) 
                      .addField("``💬`` Canales de Texto & Voz", message.guild.channels.size, true)
                      .addField("``💤`` Canal AFK", message.guild.afkChannel || "¡No hay ningún canal AFK configurado!", true)
                      .addField("``⏰`` Tiempo de AFK", message.guild.afkTimeout + " segundos" || "¡No hay ningún canal AFK configurado!", true)
                      .addField("``✅`` Niveles de Verificación", message.guild.verificationLevel, true)
                      .addField("<a:hmmmmm:600151956090257422> Emojis", message.guild.emojis.size || "Ninguno.", false)

                    message.channel.send({ embed });

              }