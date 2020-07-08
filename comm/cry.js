const Discord = require("discord.js")
exports.run = (client, message, args) => {
let user = message.mentions.users.first();  
    let cry = ["http://gif-finder.com/wp-content/uploads/2015/07/Anime-boy-crying.gif",
                  "https://i.gifer.com/C1la.gif",
                  "https://3.bp.blogspot.com/-TpcOpk5xTcs/WqJxHBK4_-I/AAAAAAAADO8/F5Ndc3FOB30VfTMnvLzfonru3dw-A_xJgCLcBGAs/s1600/Akko_cry.gif",
                  "https://i.pinimg.com/originals/83/05/c3/8305c3a012e448cb409d12e5db3ac179.gif",
                  "https://i.imgur.com/DAUCIHG.gif",
                  "https://78.media.tumblr.com/5d4be9e172a65bbc7e099cf6090f0e0e/tumblr_p1j4i9NJwn1qbvovho1_r1_500.gif",
                  "https://thumbs.gfycat.com/TeemingGratefulDuiker-size_restricted.gif",
				          "https://i.gifer.com/3B6X.gif",
				          "http://i.imgur.com/k5B1CBd.gif",
				          "https://media0.giphy.com/media/ROF8OQvDmxytW/giphy.gif",
				          "https://media1.tenor.com/images/b88fa314f0f172832a5f41fce111f359/tenor.gif",
                  "https://media.tenor.com/images/54b3dd3e7e227afb0dd31738c11c1ead/tenor.gif",
              "http://31.media.tumblr.com/tumblr_m75grgi4961r5syyvo1_500.gif",
              "http://i.imgur.com/oOtoTSB.gif",
              "http://24.media.tumblr.com/86e3fd9c2c56d4cde3277f112512fbd1/tumblr_mrh5xtoUjM1s13iszo1_500.gif",
              "https://i.imgur.com/UjIb9DT.gif",
              "https://media1.tenor.com/images/75edc9882e5175f86c2af777ffbb14a6/tenor.gif?itemid=5755232",
              "https://38.media.tumblr.com/91219cf76d12290235b496471d15cb40/tumblr_nbtqa50GyI1s4yh14o1_500.gif",
              "https://uploads.disquscdn.com/images/6367f30e37ffa3317d3cb69e4581b7574a9ec45aa35c47ef5d089ab0267d8f89.gif",
              "https://4.bp.blogspot.com/-CJu1W5MXq1g/WUiT8wFuK6I/AAAAAAAA214/tQzfUcisjlouuee_jUa9Y67Bto-2FphKACKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BFrame%2BArms%2BGirl%2B-%2BEpisode%2B12%2B%255BEND%255D%2B-%2BGourai%2BCries.gif",
              "https://i.pinimg.com/originals/9d/5d/e0/9d5de0ff75803f22ca491a7dcdf21fee.gif",
              "https://i.gifer.com/8Z1o.gif",
              "https://k41.kn3.net/taringa/5/9/5/0/8/2/9/amorypaz92/73F.gif",
              "https://i1.wp.com/www.techjunkie.com/wp-content/uploads/2018/03/Anime-Gif-with-Sad-Face-3.gif",
              "https://i.pinimg.com/originals/f6/ca/d5/f6cad5172e2e8d44da168d71b28d04bd.gif",]

                  

    var embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Llora!", client.user.avatarURL)
  .setColor("RANDOM")

  .setDescription('**'+ message.author.username +' está llorando  ``😭 ``'+'**')
  .setTimestamp()
  .setFooter(message.author.tag, message.author.avatarURL)
  .setImage(cry[Math.floor(Math.random() * cry.length)])
        message.channel.send(embed);
}