exports.run = async (client, message, args) => {    

  const marsnpm = require("marsnpm");
const Discord = require ('discord.js')
const user = message.mentions.users.first() || message.author
  let img = await marsnpm.gaussian(user.avatarURL)     
  
  let texto = args.join(" ");
  



  
      let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Pixel Ejemplo", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien para editar su imagen a gaussian ``📰``")
  .addField("Ejemplo : ", "**a!gaussian (@Mencion)**")
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  

  if(!texto)  return  message.channel.send(embud);
  
let embed = new Discord.RichEmbed()
    .setAuthor("Andrew | Pixel", client.user.avatarURL)
    .setDescription("Te Editamos la imagen a gaussian ``🔖``")
     .attachFiles([{
    attachment: img,
    name: "gaussian.png"
  }])
  .setColor("RANDOM")
    .setImage("attachment://gaussian.png")
       .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp(message.createdAt)

message.channel.send(embed)
}