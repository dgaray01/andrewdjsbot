var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
     let user = message.mentions.users.first(); 
  
  let texto = args.join(" ");
  
      let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Pat Ejemplo", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien para acariciarle! ``🧸``")
  .addField("Ejemplo : ", "**jn!pat (@Mencion)**")
  .setImage("https://imgur.com/bMATIx6.png")
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  

  if(!texto)  return  message.channel.send(embud);
  
  let pat = await weez.randomPat()
  
  let embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Acariciar", client.user.avatarURL)
  .setDescription(message.author.username + " **Acaricio a ** " + user.username + " ``👐``")
  .setImage(pat)
  .setColor("RANDOM")
  
   message.channel.send(embed)
    };
