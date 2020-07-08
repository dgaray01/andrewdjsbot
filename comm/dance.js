const Discord = require("discord.js")
exports.run = (client, message, args) => {

  let dance = ["https://cdn.weeb.sh/images/H1pi_I7Pb.gif",
               "https://cdn.weeb.sh/images/HJd2_8mPZ.gif",
               "https://cdn.weeb.sh/images/S1r6uLmvb.gif",
               "https://cdn.weeb.sh/images/SkMp_8QPZ.gif",
              "https://media.tenor.com/images/158cb79ee04d16790852b2fbb5f1eba8/tenor.gif",
               "https://media.giphy.com/media/euMGM3uD3NHva/giphy.gif",
              "https://media.tenor.com/images/5f4a923689e868c41038636bde585987/tenor.gif",
              "http://bestanimations.com/Music/Dancers/anime-dancing-girls/anime-kawaii-cute-dance-animated-gif-image-5.gif",
              "https://media.giphy.com/media/oy8FiuwqTfWdW/giphy.gif",
              "https://thumbs.gfycat.com/FittingDizzyHornedviper-size_restricted.gif",
              "https://d2w9rnfcy7mm78.cloudfront.net/2145256/original_cd9c01187cead45cd791beafa78f7e08.gif",
              "https://i.gifer.com/Afdv.gif",
              "https://media.giphy.com/media/9gxhLXyJXqAhi/giphy-downsized-large.gif",
              "https://66.media.tumblr.com/9bc3b579d14b65d45c16f7f48ab08f15/tumblr_orprpaDbI21qzxv73o1_400.gif",
              "https://gifimage.net/wp-content/uploads/2017/09/anime-gif-dance-7.gif",
              "https://media.tenor.com/images/9ffa2acb9fa8377371850f741bb4abe2/tenor.gif",
              "https://66.media.tumblr.com/93a8499e09c26c22990964804c1903eb/tumblr_nfjpkgwTJT1tfilc6o1_400.gif",
              "https://gifimage.net/wp-content/uploads/2017/09/anime-dance-gif-10.gif",
              "http://i.imgur.com/zmUyr5b.gif",
              "https://archive-media-0.nyafuu.org/c/image/1538/93/1538934985771.gif",
              "https://img.fireden.net/a/image/1472/69/1472691290793.gif",
              "https://i.kym-cdn.com/photos/images/newsfeed/000/934/874/b59.gif",
              "https://thumbs.gfycat.com/MediumTimelyChafer-size_restricted.gif",
              "https://66.media.tumblr.com/3b7d901f5917f11c65a11b1efc974152/tumblr_nmpr7yYkZ61updw00o2_500.gif",
              "http://bestanimations.com/Music/Dancers/anime-dancing-girls/anime-kawaii-cute-dance-animated-gif-image-13.gif",
              "https://pa1.narvii.com/6238/4fffe1c6896f3eaf9a999a4d1dc8176ca3688619_hq.gif",
              "http://38.media.tumblr.com/77d7e729b4328af8e0dd34b36ec18a9d/tumblr_nhr35y6sIj1sn55cbo1_500.gif",
              "https://discordemoji.com/assets/emoji/2083_megumindance.gif",]
  
  
  
  
  //
   let userm = message.mentions.users.first()

                if(!userm){
                  var user = message.author; 
  
 var embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Bailar!", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription(message.author.username + ' Se Puso a Bailar Misteriosamente! ``🥴``')
  .setTimestamp()
  .setFooter(message.author.tag, message.author.avatarURL)
  .setImage(dance[Math.floor(Math.random() * dance.length)])
        message.channel.send( embed );
                  
  }else{
   const embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Bailar!", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription(message.author.username + ' Se Puso a Bailar con ' + userm.username + '``🥳``')
  .setTimestamp()
  .setFooter(message.author.tag, message.author.avatarURL)
  .setImage(dance[Math.floor(Math.random() * dance.length)])
        message.channel.send(embud)
}
}