let Discord = require('discord.js');

exports.run = async(client, message, args) => {
  let user = message.mentions.users.first(); 
    let img = message.mentions.users.first()
    const Idiot = require("idiotic-api");
    client.API = new Idiot.Client("o5w3W99vRDOO7eEcXapd", { dev: true });
  
    let texto = args.join(" ");
  
      let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Tinder Ejemplo", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien para encontrarle en tinder! ``🙆``")
  .addField("Ejemplo : ", "**a!tinder (@Mencion)**")
  .setColor("RANDOM")
  .setThumbnail("https://i.imgur.com/Z1GyAQT.png")
  

  if(!texto)  return message.channel.send(embud);
  
    const buffer = (new Discord.Attachment(
        await client.API.tinderMatch(message.author.displayAvatarURL,img.avatarURL), "vrr.png"));


    const embed = new Discord.RichEmbed()
        .setAuthor("Andrew | Tinder ", client.user.avatarURL)
        .setDescription(" **" + message.author.username + "** Y **" + user.username +"** Se Encontraron en Tinder ``👸🏻``" )
        .setImage('attachment://vrr.png')
        .setColor("RANDOM")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp(message.createdAt)

    await message.channel.send({ files: [buffer], embed: embed });
}