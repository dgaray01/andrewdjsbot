//https://media.discordapp.net/attachments/567306547055558656/590536808715124746/giphy.png

const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://thumbs.gfycat.com/BothPoliteHypacrosaurus-max-1mb.gif",
                     "https://m.gifanimados.com/Gifs-Videojuegos/Animaciones-Videojuegos-Accion/Grand-Theft-Auto-V/Conducir-Grand-Theft-Auto-V-54940.gif",
                     "https://media.tenor.co/videos/7130aab10e65df54a237116e0e2f0179/mp4",
                 "https://media3.giphy.com/media/mlBDoVLOGidEc/giphy.gif",
                 "https://media.giphy.com/media/feOLsVVsYft04/giphy.gif",
                "https://66.media.tumblr.com/30b8549caa67999ce9234673f1104e8e/tumblr_oyw99atg401wqfvrxo1_400.gif",
                "https://66.media.tumblr.com/29baea54773b7442885732d133c7248d/tumblr_ornewcQC4s1ui7oe1o1_400.gif",
                "https://i.pinimg.com/originals/11/dc/a4/11dca40626510fcdd1b8b9d68bb68a4f.gif",
                "https://i.pinimg.com/originals/11/8c/88/118c880a2d3a5a0021e7e932bf6d0330.gif",
                "https://data.whicdn.com/images/280115858/original.gif",
                "https://pa1.narvii.com/6741/96041d5fed7ef685e906a532e34b53220dcff43a_hq.gif",
                "http://cdn.lowgif.com/full/c63cafe70cf6082d-anime-driving-gif-tumblr.gif",
                "https://data.whicdn.com/images/291229783/original.gif",
                "https://i.pinimg.com/originals/ba/35/cb/ba35cb7cc035cc52b1b6581106b4b554.gif",
                "https://data.whicdn.com/images/268562443/original.gif",
                "https://thumbs.gfycat.com/TangibleEntireAlaskajingle-size_restricted.gif",
                "https://i.gifer.com/5mYT.gif",
                "https://otakucreativa.files.wordpress.com/2017/01/bd3.gif?w=610",
                ]

    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Conducir ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Esta conduciendo ``🚗💨``**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }