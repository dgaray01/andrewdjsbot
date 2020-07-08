const Discord = require("discord.js");
const bot = new Discord.Client();
var Weez = require("weez");
var weez = new Weez.WeezAPI("SS8dJHFpTv4xKcz1ecxGJgJT5V4o1Lef64C6");

exports.run = async (client, message, args) => {
  let af = new Discord.RichEmbed()
  .setAuthor("Andrew | Susto", client.user.avatarURL)
  .setDescription ("Tienes que mencionar a alguien")
  .addField("`No Sabes Hacerlo?`","`No Te Preocupes`")
  .addField("Ejemplo ``🤓``", "a!susto @Mencion ")
  .setThumbnail("https://i.imgur.com/Z1GyAQT.png")
  .setColor("RANDOM")
  .setImage("https://i.imgur.com/EaZqVA0.png")
	if (message.mentions.users.size < 1) return message.channel.send(af)

  
	let member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let img = await weez.susto(member.user.displayAvatarURL)

   let embed = new Discord.RichEmbed()
    .setAuthor("Andrew | Susto", client.user.avatarURL)
    .attachFiles([{
    attachment: img,
    name: "susto.png"
  }])
   .setImage("attachment://susto.png")
  .setDescription ("Vio a " + message.mentions.members.first() +" Y "+ message.author.tag + " Se Asusto ``😨``")
  .setColor("RANDOM")
   
      
       
      
    message.channel.send(embed)
   message.delete().catch(() => {});
}
  