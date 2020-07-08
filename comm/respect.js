let Discord = require('discord.js');

exports.run = async(client, message, args) => {
  let user = message.mentions.users.first(); 
    let img = message.mentions.users.first()
    const Idiot = require("idiotic-api");
    client.API = new Idiot.Client("o5w3W99vRDOO7eEcXapd", { dev: true });
  
    let texto = args.join(" ");
  
      let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | respect Ejemplo", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien para ver la imagen de respetos! ``🇫``")
  .addField("Ejemplo : ", "**a!respect (@Mencion)**")
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  

  if(!texto)  return message.channel.send(embud);
  
    const buffer = (new Discord.Attachment(
        await client.API.respect(img.avatarURL), "vrr.png"));


    const embed = new Discord.RichEmbed()
        .setAuthor("Andrew | Respect ", client.user.avatarURL)
        .setDescription("Darle Respetos a " + user.username + " | Comando: jn!f ")
        .setImage('attachment://vrr.png')
        .setColor("RANDOM")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp(message.createdAt)

    await message.channel.send({ files: [buffer], embed: embed });
}