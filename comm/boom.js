const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://i.gifer.com/8vvH.gif",
                 "https://media1.tenor.com/images/f55300bb85d5f4135a12efc538b5225c/tenor.gif",
                 "https://cdn.discordapp.com/attachments/399448944889036801/550388690052972555/ba9af36820a1c5771765b75cb5a9280871d2d5c2_hq.gif",
                 "https://media0.giphy.com/media/eN8Qt3oXtxjAk/giphy.gif",
                 "https://media.giphy.com/media/d47Ja5cDiMGku43C/giphy.gif",
                 "https://media1.tenor.com/images/cfb3b88abd8690e3ac62f40aa94b1fa3/tenor.gif",
                 "https://i.gifer.com/XCVX.gif",
                 "https://thumbs.gfycat.com/AthleticInnocentEkaltadeta-size_restricted.gif",
                 "https://static.vix.com/es/sites/default/files/btg/implosion-akira.gif",
                 "https://thumbs.gfycat.com/InferiorGentleDoctorfish-small.gif",
                 "https://thumbs.gfycat.com/HeartfeltForcefulAss-size_restricted.gif",
                 "https://2.bp.blogspot.com/-_pckM7MB5A4/WIk1xQFtgUI/AAAAAAAAuA8/h5xptSY0PEoV1dcPacZ8xJq-Sovh12CFQCPcB/s1600/Omake%2BGif%2BAnime%2B-%2BKono%2BSubarashii%2BSekai%2Bni%2BShukufuku%2Bwo%2521%2B2%2B-%2BEpisode%2B3%2B-%2BMegumin%2BExplosion%2B2.gif",
                 "http://25.media.tumblr.com/b40ecdcfdaa5e026e59d68d3932c9227/tumblr_mzh6jxL2U61sv0rf6o1_500.gif",
                 "https://media2.giphy.com/media/u2dI2h52gAzNS/giphy.gif",
                 "https://media1.tenor.com/images/b4cd5df3a6db92824165c4f54403e3eb/tenor.gif",
                 "https://media.giphy.com/media/BsEr2qtxm1ERi/giphy.gif",
                ]

    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Boom ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Escuchastes algo? ``💥``**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }