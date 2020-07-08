const RetroText = require("retrotext");
const Discord = require("discord.js")
exports.run = async (client, message, args) => { 
  if (args.length !== 0) {
    const [line1, line2, line3] = args.join(" ").split(",").map(elem => elem.trim());
    if (/^[\w\ ]+$/i.test(line1) === false || /^[\w\ ]+$/i.test(line2) === false || /^[\w\ ]+$/i.test(line3) === false) return message.reply("¡Sólo se permiten caracteres alfanuméricos, espacios y guiones bajos!"); 
    message.channel.startTyping();
    if (line3 !== undefined) {
      const text = new RetroText().setLine(1, line1).setLine(2, line2).setLine(3, line3).setBackgroundStyle("outlineTri").setTextStyle("chrome");
      const textImage = await text.fetchURL();
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: textImage,
          name: "retro.png"
        }]
      });
    } else if (line2 !== undefined) {
      const text = new RetroText().setLine(1, line1).setLine(2, line2).setBackgroundStyle("outlineTri").setTextStyle("chrome");
      const textImage = await text.fetchURL();
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: textImage,
          name: "retro.png"
        }]
      });
    } else {
      const text = new RetroText().setLine(2, line1).setBackgroundStyle("outlineTri").setTextStyle("chrome");
      const textImage = await text.fetchURL();
      message.channel.stopTyping();
      
        let embed = new Discord.RichEmbed()
         .setAuthor("Andrew | Retro Texto", client.user.avatarURL)
         .setDescription (message.author.tag + " Hizo Un Texto Retro! ``😨``")
        .attachFiles([{
          attachment: textImage,
          name: "retro.png"
        }])
        .setImage("attachment://retro.png")
        .setColor("RANDOM")
      
    

   message.channel.send(embed)
  }}}