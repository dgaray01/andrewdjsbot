const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://media.giphy.com/media/l1J9u3TZfpmeDLkD6/giphy.gif",
                     "https://media.giphy.com/media/Vi4MRwWi9sYpi/giphy.gif",
                     "https://media1.giphy.com/media/3o9bJX4O9ShW1L32eY/giphy.gif",
                 "https://media.giphy.com/media/9tVXAuRGXB2y9tB5Qg/giphy.gif",
                 "https://media1.tenor.com/images/cfbc067a1445d5baa5ca36cc2642a6c4/tenor.gif?itemid=5664724",
                 "https://media1.tenor.com/images/8f9cfaa4d860dc4aee9baf3371384cca/tenor.gif?itemid=5944985",
                 "https://thumbs.gfycat.com/SparklingObedientGoldfinch-size_restricted.gif",
                 "https://media1.tenor.com/images/bd71c8c65f45a0c5586c9830eb6e4728/tenor.gif?itemid=7885149",
                 "https://media0.giphy.com/media/OOSbqEBoTmA2OUN3pO/source.gif",
                 "https://media1.tenor.com/images/bc4e86abbe639a54e0913552f29fd5f8/tenor.gif?itemid=12003972",
                 "https://66.media.tumblr.com/719b1f1baeafeaaa146499c2e81f1cf7/tumblr_ol1hlgzc981uprh6zo1_400.gif",
                 "https://i.pinimg.com/originals/13/e2/76/13e2761232d7671a9c2663aca5b9dbf2.gif",
                 "https://i.pinimg.com/originals/b3/96/e0/b396e0fd1ced8ad36545a9094c5218ad.gif",
                 "https://media1.tenor.com/images/436aba7d8b5e23a6f0ad005fc8b77b4b/tenor.gif?itemid=9052135",
                 "https://i.gifer.com/HO5y.gif",
                 "https://thumbs.gfycat.com/AgonizingActualFlounder-size_restricted.gif",
                 "https://data.whicdn.com/images/143303695/original.gif",          
                 "https://media1.giphy.com/media/U77FFxuyoIPvHEIgkq/giphy.gif",
                 "https://media1.tenor.com/images/40383ad4bf828866d7bd67f5fa15d56d/tenor.gif?itemid=5181787",
                 "https://66.media.tumblr.com/f3ad00e7be3649849bdbe9f67559d03d/tumblr_o0s1fnSaYU1tydz8to1_400.gif",
                 "https://thumbs.gfycat.com/GoodnaturedMemorableKomododragon-size_restricted.gif",
                 "https://i.pinimg.com/originals/5c/49/0d/5c490dd325145f0a8e44a13e70667c97.gif",
                 "https://data.whicdn.com/images/36262219/original.gif",
                 "https://thumbs.gfycat.com/OrdinarySpectacularBluetickcoonhound-size_restricted.gif",
                 "https://media1.tenor.com/images/2ba945abd8db5c6da04944e154f17640/tenor.gif?itemid=13458008",
                 "https://i.gifer.com/2y8x.gif",
                 "http://31.media.tumblr.com/71deee902dbf433e900c1da751942345/tumblr_mmnfkbq0OI1s2mvo5o1_500.gif",
                 "https://thumbs.gfycat.com/HeartySpanishDuck-size_restricted.gif",
                 "http://pa1.narvii.com/5623/959d60662504637ee331e1543f13b9765b3497b7_hq.gif",
                 "https://media1.tenor.com/images/5a150ad03f7b1756139e04b69b9cd8cc/tenor.gif?itemid=10203291",
                 "https://66.media.tumblr.com/bbaaa0438cf32235044ba99b256a61b2/tumblr_opwj75m4K81vviqkjo1_500.gif",
                 "https://i.kym-cdn.com/photos/images/newsfeed/000/677/530/309.gif",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0AbmPowacOZmjJDVcN84BDkVL4HDQFhUHoODxn64PyjgzwCzSQ",
                 "https://media1.giphy.com/media/at9sACWw6juSI/giphy.gif",
                 "http://www.lovethisgif.com/uploaded_images/39504-Oreshura-Weekly-Update-Episode-8.gif",
                 "https://media.tenor.com/images/002fc66ad39954a2e8594148e5cb86c9/tenor.gif",
                 "https://thumbs.gfycat.com/HideousDesertedCrossbill-size_restricted.gif",
                 ]

    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Angry ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Se Enojo cuidado es peligroso cuando esta asi! ``😤``**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }