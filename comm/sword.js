//https://media.giphy.com/media/6WhDjaiFiesTK/giphy.gif

const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://media.giphy.com/media/6WhDjaiFiesTK/giphy.gif",
                     "https://thumbs.gfycat.com/IgnorantUncomfortableKingfisher-size_restricted.gif",
                     "https://media3.giphy.com/media/10nrvEnLmMJLpu/giphy.gif",
                "https://media1.tenor.com/images/07c7921b7cc767c29b38bfbb85c3312f/tenor.gif?itemid=11317615",
                "https://media2.giphy.com/media/zVdKuyQwg07N6/giphy.gif",
                "https://media1.tenor.com/images/366b7f878a454cb5347738ba6882f60a/tenor.gif?itemid=9135633",
                "https://media1.tenor.com/images/079e7632de23c69c75bfb6ef8cc7a6a5/tenor.gif?itemid=11115649",
                "https://j.gifs.com/y5a02e.gif",
                "https://giffiles.alphacoders.com/253/2534.gif",
                "https://i.pinimg.com/originals/d9/bc/ce/d9bcce5f10dd2b190e009135d5a0420e.gif",
                "https://i.gifer.com/LyyK.gif",
                "https://media1.tenor.com/images/aa7341e1f445d0ac4bba3c8a9eb627aa/tenor.gif?itemid=3532013",
                "https://i.makeagif.com/media/10-04-2015/rbu1g1.gif",
                "https://media1.tenor.com/images/96567fae3c535a33f457b03b9fb03fe1/tenor.gif?itemid=12422025",
                "https://media2.giphy.com/media/oC3uecqnN1exy/source.gif",
                "https://i.gifer.com/QIvb.gif",
                "https://66.media.tumblr.com/fca3891f647668cd643b3c55c9eb6ed2/tumblr_oojgksLmS61w4oiizo1_400.gif",
                "https://i.makeagif.com/media/10-04-2015/PAmmJr.gif",
                "https://media4.giphy.com/media/ChQhUQUOMgAlq/giphy.gif",
                "https://media1.tenor.com/images/2100e8fc7717eed368edfe5df152db83/tenor.gif?itemid=10669554", 
                "https://i.pinimg.com/originals/13/ce/50/13ce50c11ec1b3d5ef897debdac9f69b.gif", 
                 
                ]

    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Espada ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Esta con una Espada cuidado! ``🔪``**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }