let Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let img = message.mentions.users.first()
    const Idiot = require("idiotic-api");
    client.API = new Idiot.Client("o5w3W99vRDOO7eEcXapd", { dev: true });
  
    let texto = args.join(" ");
  
      let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Shota Ejemplo", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien Para que te acose unas cuantas chicas 7u7! ``😇``")
  .addField("Ejemplo : ", "**a!shota (@Mencion)**")
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  

  if(!texto)  return message.channel.send(embud);
  
    const buffer = (new Discord.Attachment(
        await client.API.girls(img.avatarURL), "vrr.png"));


    const embed = new Discord.RichEmbed()
        .setAuthor("Andrew | Shota ", client.user.avatarURL)
        .setDescription("**Wow te volviste shota**  ``👦🏻``")
        .setImage('attachment://vrr.png')
        .setColor("RANDOM")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp(message.createdAt)

    await message.channel.send({ files: [buffer], embed: embed });
}
