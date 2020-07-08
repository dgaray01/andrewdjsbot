const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let{body} = await superagent
  .get(`http://aws.random.cat/meow`);

  let catembed = new Discord.RichEmbed()
  .setColor("RANDOM")

    .setAuthor("Andrew | Gatos Aleatorios", "https://images-ext-2.discordapp.net/external/mWXAXuhZXCpM62hmnFI0YK_OCqMc8uYOLAG518ekZnE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
    .setDescription("**Mira los Gatos mas bonitos que hay!** ``🐱``")
  .setImage(body.file)
   .setFooter(message.author.tag, message.author.avatarURL)
  .setTimestamp(message.createdAt)
  message.channel.send(catembed);

}
   