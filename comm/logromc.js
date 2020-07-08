
const request = require("request").defaults({ encoding: null });
let Discord = require('discord.js')

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  if (args.length > 0) {
    message.channel.startTyping();
    const memeOutput = request(`https://www.minecraftskinstealer.com/achievement/a.php?i=13&h=Achievement+get%21&t=${args.join("+")}`);
    message.channel.stopTyping();
    
     let embed = new Discord.RichEmbed()
     .setAuthor("Andrew | Logro De MC", client.user.avatarURL)
     .setDescription (message.author.tag + " **Consiguio un logro de minecraft** ``🌲``")
    .attachFiles([{
   attachment: memeOutput,
        name: "mc.png"
  }])
  .setColor("RANDOM")
    .setImage("attachment://mc.png")
    message.channel.send(embed)
    
  } else {
    message.reply("¡Necesitas proporcionar algún texto para generar un logro de Minecraft!");
  }
};