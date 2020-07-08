const request = require("request");
const Discord = require("discord.js")

exports.run = async (client, message, args) => { 
  message.channel.startTyping();
  request({ uri: "http://shibe.online/api/birds", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    let embed = new Discord.RichEmbed()
    .setAuthor("Andrew | Aves", client.user.avatarURL)
    .setDescription("Mira Algunas De las aves mas kawaiis")
     .attachFiles([{
    attachment: body[0],
    name: "bird.png"
  }])
  .setColor("RANDOM")
    .setImage("attachment://bird.png")
       .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp(message.createdAt)
     message.channel.send(embed);

  
  });
};