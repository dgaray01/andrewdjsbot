let Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let img = message.mentions.users.first()
    const Idiot = require("idiotic-api");
    client.API = new Idiot.Client("o5w3W99vRDOO7eEcXapd", { dev: true });
  
    let texto = args.join(" ");
  
      let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | VR Ejemplo", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien Para Ver en VR (VirtualReality)! ``☄️``")
  .addField("Ejemplo : ", "**a!vr (@Mencion)**")
  .setColor("RANDOM")
  .setThumbnail("https://i.imgur.com/Z1GyAQT.png")
  

  if(!texto)  return message.channel.send(embud);
  
    const buffer = (new Discord.Attachment(
        await client.API.virtual(img.avatarURL), "vrr.png"));


    const embed = new Discord.RichEmbed()
        .setAuthor("Andrew | VR ", client.user.avatarURL)
        .setDescription("Wow Que realista el VR! ``🧭``")
        .setImage('attachment://vrr.png')
        .setColor("RANDOM")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp(message.createdAt)

    await message.channel.send({ files: [buffer], embed: embed });
}

//Creditos: ThaWill :v