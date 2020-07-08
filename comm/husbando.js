var Weez = require("weez");
var weez = new Weez.WeezAPI("ZqVVVl2oAzl0npUcvLgBZqyUCOUKsTIw54jT");
const Discord = require("discord.js")

exports.run = async (client, message) => {

  let husbando = await weez.randomBoys()


  
  let embed = new Discord.RichEmbed()

                      .setAuthor("Andrew | Husbandos Randoms",client.user.avatarURL)
                      .setDescription("**Algunos Husbandos mas cute que hay!**")
                      .setColor("RANDOM")
                      .setFooter(message.author.tag, message.author.avatarURL)
                      .setTimestamp(message.createdAt)
                      .setImage(husbando)

  
  message.channel.send(embed)
                

                }        