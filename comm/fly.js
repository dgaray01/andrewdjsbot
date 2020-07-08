const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://media.giphy.com/media/xUNd9ANTXp1ZTHqsQU/giphy.gif",
                     "http://www.pleated-jeans.com/wp-content/uploads/2015/10/wtf-japan-legs-fly.gif",
                     "https://data.whicdn.com/images/304588096/original.gif",
                     "https://pa1.narvii.com/6063/e70c31a95b4d90229928ad38592f6f00b7e8da10_hq.gif",
                "http://images6.fanpop.com/image/photos/33300000/fly-anime-multiverse-33351598-500-267.gif",
                "https://i.gifer.com/V7Pb.gif",
                "https://media1.giphy.com/media/3oEdv5d7di4eolSoLu/source.gif",
                "https://thumbs.gfycat.com/DelayedConsciousGodwit-size_restricted.gif",
                "https://media2.giphy.com/media/k1yPIAHW6aZXO/giphy.gif",
                "https://pa1.narvii.com/6051/f7434a0e32507f259f8071d987a614e5b05933b7_hq.gif",
                "https://k38.kn3.net/taringa/5/2/7/7/7/9/8/counter2d/FDD.gif",
                "https://media1.tenor.com/images/262d50e42c7cf6c73a327858df54eea2/tenor.gif",
                "http://olegif.com/bin/gifs/00/04/87.gif",
                "https://data.whicdn.com/images/150556795/original.gif",
                "https://66.media.tumblr.com/245e1dd0a0522ce16a011878726896e4/tumblr_nalod4huAl1rjsl9ao1_400.gif",
                "https://uploads.disquscdn.com/images/b20c2861fcbe3010fd9d269aa39e3504d537bae6e6cccf83249e8af7ce5e0680.gif",
                "https://66.media.tumblr.com/f5123ac0661f15b818ac5667e7dff907/tumblr_pccao70MPn1v8pjpxo2_400.gif",
                "https://static.tumblr.com/033e31dbe06209b05a91cd55b7fc8e07/adw9duu/qTVnet3e0/tumblr_static_tumblr_static__640.gif",         
                "https://66.media.tumblr.com/d0b7ee2e8234d1cbe73046c4f687665c/tumblr_oqtnbaAzSC1tgy4o5o1_500.gif",
                "https://data.whicdn.com/images/180960951/original.gif",
                "https://i.pinimg.com/originals/5e/53/be/5e53be847359bd33d5da841db13a2c99.gif",
                "https://media2.giphy.com/media/q62RmgTAJzjIk/giphy.gif",
                "https://vignette.wikia.nocookie.net/littlewitch/images/6/60/Hannah_Barbara_Avery_Broom.gif",
                "https://2.bp.blogspot.com/-CFR0iAPj9L8/VzquSH8l9YI/AAAAAAAAdJw/iX7BjTmSHo8hKdoaZmeO1UFVPihO-nKeACKgB/s1600/Omake%2BGif%2BAnime%2B-%2BFlying%2BWitch%2B-%2BEpisode%2B6%2B-%2BMakoto%2527s%2BDiscomfort.gif",
              
                ]

    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Volar  ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Esta Volando! ``🥏``**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }