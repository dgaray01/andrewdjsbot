const client = require('nekos.life');
const neko = new client();
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first(); 
  let feed = await neko.sfw.feed()
           
 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Alimentar Ejemplo", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien para alimentarle!")
  .addField("Ejemplo : ", "**jn!feed (@Mencion)**")
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  

  if(!texto)  return  message.channel.send(embud);
  
    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | ¡Alimentar!", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Alimento a '+ user.username +' ** ``🍨`` ')
  .setImage(feed.url)
    .setFooter(message.author.tag, message.author.avatarURL)
  
      
        message.channel.send({embed});
  
}