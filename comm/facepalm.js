//https://media.discordapp.net/attachments/567306547055558656/590536808715124746/giphy.png

const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://media.giphy.com/media/3ov9jCGzR1JtD8Hlni/giphy.gif",
                     "https://media3.giphy.com/media/27EhcDHnlkw1O/giphy.gif",
                     "https://media.giphy.com/media/Ra1bmpxpsppNC/giphy.gif",
                "https://cdn.discordapp.com/attachments/585624447822594060/585639833343623168/1.gif",
                "https://cdn.discordapp.com/attachments/585624447822594060/585639866709180436/2.gif",
                "https://cdn.discordapp.com/attachments/585624447822594060/585639884887162912/3.gif",
                "https://cdn.discordapp.com/attachments/585624447822594060/585639915325227027/4.gif",
                "https://cdn.discordapp.com/attachments/585624447822594060/585639939883139092/5.gif",
                "https://cdn.discordapp.com/attachments/585624447822594060/585639987337232385/6.gif",
                "https://thumbs.gfycat.com/KaleidoscopicOrdinaryCreature-size_restricted.gif",
                "https://media1.tenor.com/images/fa28ce1841f99cc2a2ce470cc642cede/tenor.gif?itemid=5519674",
                "https://i.pinimg.com/originals/23/37/52/233752b955715bb1bc35972ee12f3494.gif",
                "https://ci.memecdn.com/3194376.gif",
                "https://thumbs.gfycat.com/SpiritedTheseBeauceron-size_restricted.gif",
                "https://i.gifer.com/2Lfy.gif", 
                "https://data.whicdn.com/images/115410597/original.gif",
                "https://i.imgur.com/l7QBVCH.gif?noredirect",
                "http://likegif.com/wp-content/uploads/2012/10/facepalm-gif-47.gif",

                ]

    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | FacePalm ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Se hizo palmada facial ``🤦``**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }