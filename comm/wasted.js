const Discord = require("discord.js")
exports.run = (client, message, args) => {
let wasted = ["https://cdn.discordapp.com/attachments/585624879978643490/585650893324812289/1.gif",
                "https://cdn.discordapp.com/attachments/585624879978643490/585650954171318291/2.gif",
                "https://cdn.discordapp.com/attachments/585624879978643490/585651009066631190/3.gif",
                "https://cdn.discordapp.com/attachments/585624879978643490/585651030696525844/4.gif",
                "https://cdn.discordapp.com/attachments/585624879978643490/585651084593201192/5.gif",
                "https://cdn.discordapp.com/attachments/585624879978643490/585651189404925983/8.gif",
                "https://cdn.discordapp.com/attachments/585624879978643490/585651320414011402/11.gif",
                "https://cdn.discordapp.com/attachments/585624879978643490/585651387543584768/12.gif",
                "https://i.gifer.com/PXEk.gif",
                "https://i.kym-cdn.com/photos/images/newsfeed/001/160/891/6d2.gif",
                "https://media1.tenor.com/images/2f4b1e91f1cd7c8fa37b28ea52d55e4e/tenor.gif",
                "https://i.kym-cdn.com/photos/images/newsfeed/001/208/163/5e8.gif",
                "https://thumbs.gfycat.com/IllImperturbableAztecant-small.gif",
                "http://38.media.tumblr.com/75dc51bcc17d5e5345874d20da86c83d/tumblr_ntk7t9sn2i1r72ht7o1_500.gif",
                "https://i.pinimg.com/originals/71/07/f7/7107f75958a64cb9cc0e7472a859b64b.gif",
                "https://archive-media-0.nyafuu.org/bant/image/1494/61/1494616017999.gif",
                "https://i.kym-cdn.com/photos/images/newsfeed/001/205/803/548.gif",
                "https://i.kym-cdn.com/photos/images/newsfeed/001/272/371/a51.gif",
                 "https://i.kym-cdn.com/photos/images/newsfeed/001/191/437/a0b.gif",
                 "https://i.kym-cdn.com/photos/images/newsfeed/001/487/140/d17.gif",
                 "https://i.kym-cdn.com/photos/images/newsfeed/000/961/693/421.gif",
                 "https://i.kym-cdn.com/photos/images/newsfeed/000/954/645/c57.gif",  
                ]

  let user = message.mentions.users.first(); 
    var embud = new Discord.RichEmbed()
   .setAuthor("Andrew | Wasted ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Quedo Devastado! (Wasted)  ``💀``**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(wasted[Math.floor(Math.random() * wasted.length)])
        message.channel.send({embed});
  
   let texto = args.join(" ");

  if(!texto)  return  message.channel.send(embud);
  
    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Wasted ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ user.username +'** Quedo Devastado! (Wasted)  ``💀``')
  .setImage(wasted[Math.floor(Math.random() * wasted.length)])
    .setFooter(message.author.tag, message.author.avatarURL)
  
      
        message.channel.send({embed});
  
}