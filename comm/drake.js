var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
let user = message.mentions.users.first(); 
                  let member = message.mentions.users.first()
                  
                    const embed = new Discord.RichEmbed()
                       
                        .setAuthor("Andrew | Drake",  client.user.avatarURL)
                        .setDescription("**Menciona a otro jugador y espera a que Drake decida**")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
                  
                  if(!member) return message.channel.send({embed})

                  let img = await weez.drake(message.author.displayAvatarURL, member.displayAvatarURL)

                  
  
  message.channel.send(({ files: [img]}));
                 
                

                }
//.setTitle("Prefirio a" +' user.username' )