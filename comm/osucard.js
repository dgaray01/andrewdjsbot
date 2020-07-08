let Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let img = message.mentions.users.first()
    const Idiot = require("idiotic-api");
    client.API = new Idiot.Client("o5w3W99vRDOO7eEcXapd", { dev: true });
    const buffer = (new Discord.Attachment(
        await client.API.osu(img.avatarURL), "osucard.png"));


    const embed = new Discord.RichEmbed()
        .setAuthor("Andrew | VR ", client.user.avatarURL)
        .setDescription("Wow Que realista el VR! ``🧭``")
        .setImage('attachment://osucard.png')
        .setColor("RANDOM")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp(message.createdAt)

    await message.channel.send({ files: [buffer], embed: embed });
}

//Creditos: ThaWill :v