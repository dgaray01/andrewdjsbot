const Discord = require("discord.js")
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  if (args.join(" ").toLowerCase().includes("monika")) {
    return message.channel.send("No solo no.");
  }
  const encodedwaifu = Buffer.from(args.join(" "))
    .toString("base64")
    .split("");
  encodedwaifu.forEach((item, index, array) => {
    array[index] = item.charCodeAt(0);
  });
  const finalscore = encodedwaifu.reduce((a, b) => a + b, 0) % 11;
  var suggestion = "";
  if (finalscore <= 3) {
    suggestion = "Tu waifu es basura; consigue uno nuevo.";
  } else if (finalscore <= 6) {
    suggestion = "Tu waifu esta bien.";
  } else if (finalscore <= 9) {
    suggestion = "Tu waifu es bueno.";
  } else {
    suggestion = "Tu waifu es increíble.";
  }

   var embed = new Discord.RichEmbed()

   .setAuthor("Andrew | Puntuacion de Waifu", client.user.avatarURL)
   .setDescription(`Doy ${args.join(" ")} a ${finalscore}/10. ${suggestion}`)
   .setColor("RANDOM")
  .setFooter(message.author.tag, message.author.avatarURL)
  .setTimestamp(message.createdAt)
  .setImage("https://www.gotoquiz.com/qi/waifu_comparison_test-f.jpg")
  .setThumbnail("https://lewd.sx/uploads/avatars/avatar_4.gif") 
      
  message.channel.send(embed);
};
