const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://media.giphy.com/media/WsWJZcJoxmLUk/giphy.gif",
                     "https://data.whicdn.com/images/290510883/original.gif",
                     "http://33.media.tumblr.com/tumblr_lxfqnyYrAX1qio1obo1_500.gif",
                     "https://cdn60.picsart.com/182542841000202.gif",
                "https://thumbs.gfycat.com/DistantMilkyAfricanmolesnake-size_restricted.gif",
                "https://media1.giphy.com/media/rSMaFJjMF1PuE/giphy.gif",
                "https://thumbs.gfycat.com/EquatorialGleefulArabianhorse-size_restricted.gif",
                "https://i.imgur.com/pr6lR8A.gif",
                "https://media.giphy.com/media/6LAUhyKWTfcvm/giphy.gif",
                "https://media3.giphy.com/media/J1cBEFZp00lJC/giphy.gif",
                "https://i.pinimg.com/originals/35/30/ac/3530ac9cef873181afc7f9d36d0ce101.gif",
                "http://4.bp.blogspot.com/-SD9hyKmuFq4/ViQ1aFaKiMI/AAAAAAAAAuA/G_UWvu3b8KQ/s640/tumblr_n1bewaH5br1slbj5jo1_500.gif",
                "https://ugc.kn3.net/i/760x/http://1.bp.blogspot.com/-1jCjkh5Vi-8/UB6NEo2xrjI/AAAAAAAAALE/LbPmYRfWIMI/s640/tumblr_lzxpvbBg1G1qgh2ixo1_500_large.gif",
                "https://data.whicdn.com/images/230771262/original.gif",
                "https://media1.tenor.com/images/bd67f01a9865f798a70a0ec0ac9c3d3c/tenor.gif",
                "http://static.tumblr.com/19d689bb03baf90204da453201fb323b/jnj8eca/7Qwmv2xjw/tumblr_static_as.gif",
                "https://i.gyazo.com/e156c7e463b78095a71805058e2087c1.gif",
                "https://gifimage.net/wp-content/uploads/2017/09/anime-boy-gif-suicidal-11.gif",         
                "https://i.kym-cdn.com/photos/images/facebook/000/879/381/451.jpg"]

    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Suicidio ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Se Suicido ``💉``**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }