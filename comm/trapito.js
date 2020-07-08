var Weez = require("weez");
var weez = new Weez.WeezAPI("ZqVVVl2oAzl0npUcvLgBZqyUCOUKsTIw54jT");
let Discord = require('discord.js')


exports.run = async (client, message) => {
  
  let trapito = await weez.randomTrap()

      
  
  let embed = new Discord.RichEmbed()
               
                      .setAuthor("Andrew | Trapitos Random", client.user.avatarURL)
                      .setDescription("**Yo dejo algunas imagenes de trapos por aca**")
                      .setColor("RANDOM")
                      .setFooter(message.author.tag, message.author.avatarURL)
                      .setTimestamp(message.createdAt)
                      .setImage(trapito)

  
  message.channel.send(embed)
                
             
                }        