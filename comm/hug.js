var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
    let texto = args.join(" ");
  let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Hug Ejemplo", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien!")
  .addField("Ejemplo : ", "**a!hug (@Mencion)**")
  .setImage("https://cdn.glitch.com/41e7e015-db5b-4310-bee5-b4bc0991a5a5%2Ff3979841aff19231bf4b79f8bebede15.png")
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  

  if(!texto) return  message.channel.send(embud);
     let user = message.mentions.users.first(); 
  let Abrazo = await weez.randomAbrazo()
  
  let embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Abrazo", client.user.avatarURL)
  .setDescription(message.author.username + " **Abrazo a ** " + user.username + " ``🤝``")
  .setImage(Abrazo)
  .setColor("RANDOM")
  
   message.channel.send(embed)
    };
