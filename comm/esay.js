 const Discord = require('discord.js')
    exports.run = async (bot, message, args) => {

let texto = args.join(" ");
    message.delete()
if (!args[0]) {
message.channel.send(`Debes escribir algo ${message.author}!`)
 } else {
if (args[0]) {
  var SayEmbed = new Discord.RichEmbed()
  .setColor(process.env.COLOR)
  .addField('**Dicho por:**',`${message.author}`)
  .addField('**Mensaje:**', args.join(' '))
  .setThumbnail(message.author.avatarURL)
message.channel.send({embed: SayEmbed})
};
};
};
