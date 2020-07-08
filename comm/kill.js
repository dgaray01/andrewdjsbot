const Discord = require("discord.js")
exports.run = (client, message, args) => {
let user = message.mentions.users.first();  
    let muertes = ["https://i.imgur.com/4krZzOH.gif",
                  "https://media.giphy.com/media/1Bgr0VaRnx3pCZbaJa/giphy.gif",
                  "http://i.imgur.com/MXRoi1L.gif",
                  "https://i.imgur.com/LQknzjF.gif",
                  "https://i.imgur.com/nNuad7E.gif",
                  "https://i.imgur.com/AnDKb7E.gif",
                  "https://i.imgur.com/6iddVOo.gif",
				          "https://i.imgur.com/QCA7ula.gif",
				          "https://media.giphy.com/media/yRMK47EIu9D3i/giphy.gif",
				          "https://media.giphy.com/media/23UYNxEnHywhy/giphy.gif",
				          "https://media.giphy.com/media/W7o5wwiAGY0lG/giphy.gif",
                  "https://media.giphy.com/media/QAEtKq0Vuu4la/giphy.gif"]

      let texto = args.join(" ");             
    let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Kill Ejemplo", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien para matarle! ``🔫``")
  .addField("Ejemplo : ", "**a!kill (@Mencion)**")
  .setImage("https://imgur.com/GUXlT2Y.png")
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  

  if(!texto)  return  message.channel.send(embud);
    var embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Matar", client.user.avatarURL)
 
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' mató a '+ user.username +'**')
                        .setFooter(message.author.tag, message.author.avatarURL)
                      .setTimestamp(message.createdAt)
  .setImage(muertes[Math.floor(Math.random() * muertes.length)])
        message.channel.send(embed);
}