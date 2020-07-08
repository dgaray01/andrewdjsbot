const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://cdn.discordapp.com/attachments/585624642442494062/585644862280564740/1.gif",
                "https://cdn.discordapp.com/attachments/585624642442494062/585644991523717128/2.gif",
                "https://cdn.discordapp.com/attachments/585624642442494062/585645075158269952/3.gif",
                "https://cdn.discordapp.com/attachments/585624642442494062/585645103201124355/4.gif",
                "https://cdn.discordapp.com/attachments/585624642442494062/585645126714523659/5.gif",
                "https://cdn.discordapp.com/attachments/585624642442494062/585645142174597131/6.gif",
                "https://cdn.discordapp.com/attachments/585624642442494062/585645226031579157/7.gif",
                "https://cdn.discordapp.com/attachments/585624642442494062/585645294981480449/8.gif",
                "https://cdn.discordapp.com/attachments/585624642442494062/585645308051193866/9.gif",
                "https://cdn.discordapp.com/attachments/585624642442494062/585645323184111626/10.jpeg",
                "https://i.makeagif.com/media/6-17-2018/pjG7fh.gif",
                "https://pa1.narvii.com/6412/84353e4a1ed28e8b2f8f63470ffe1cf753a1722b_hq.gif",
                "http://3.bp.blogspot.com/-wHYF3NxtglU/Uo1NCQICOYI/AAAAAAAACXI/w2iUZ-UKX4U/s1600/tumblr_mouq7bcENe1s7k13so2_500.gif",
                "https://thumbs.gfycat.com/CheerfulRegalBlueshark-size_restricted.gif",
                "https://uploads.tapatalk-cdn.com/20190524/dbc325b96c2739004cac40c894440c38.gif",
                "https://i.kym-cdn.com/photos/images/newsfeed/001/093/851/0a5.gif",
                "https://thumbs.gfycat.com/BlaringShimmeringKoalabear-size_restricted.gif",
                "https://ci.memecdn.com/6981988.gif",         
                ]

    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | FBI ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' El FBI está aquí, ¡Huye! ``👮``**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }