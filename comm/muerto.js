exports.run = async (client, message, args) => {    
const user = message.mentions.users.first() || message.author
const Discord = require ('discord.js')
     
  
  let texto = args.join(" ");
  
      let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Pat Ejemplo", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien para ver su tumba ``⚰️``")
  .addField("Ejemplo : ", "**a!muerto (@Mencion)**")
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  

  if(!texto)  return  message.channel.send(embud);
let embed = new Discord.RichEmbed()
.setAuthor("Andrew | Muerto", client.user.avatarURL)
.setDescription("Todos lloramos la perdida de **" + user.username + "** ``💀``")
.setColor("RANDOM")
.setImage(`https://marsapi.glitch.me/jimp3?avatar=${user.avatarURL}`)

message.channel.send(embed)
}