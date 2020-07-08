
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first(); 
let bite = ["https://media.giphy.com/media/KS19zqeobNcBO/giphy.gif",
                "https://media1.tenor.com/images/072fa5326ee175853c2e862af3aa76f5/tenor.gif",
                "https://media1.tenor.com/images/38de8de75c78abd6a160245a9e3dbbd9/tenor.gif",
                "http://25.media.tumblr.com/540bc6780addc89e5ff71dc18a3b91f1/tumblr_mh0ubhBeXL1qfszb5o1_500.gif",
                "https://media3.giphy.com/media/aTCC28zhBUw9y/giphy.gif",
                "https://i.pinimg.com/originals/cd/2c/c6/cd2cc65ff07f62533821f952e3542bd8.gif",
                "https://media1.tenor.com/images/193b4fcca15f66cac64ea7533ea24751/tenor.gif",
                "https://i.gifer.com/FQcH.gif",
                "https://media1.tenor.com/images/bb51710526d85fa16b25b72f0fdee2b4/tenor.gif",
                "https://media1.tenor.com/images/d76fdb43bec84185670b091e20542665/tenor.gif",
                "https://thumbs.gfycat.com/CraftyMellowIndigobunting-size_restricted.gif",
                "http://gifdownload.net/wp-content/uploads/2019/01/anime-bored-gif-3.gif",
                "https://media1.tenor.com/images/f42b4f2b7b6e69fc612b56b112a2e1e5/tenor.gif",
                "https://i.pinimg.com/originals/40/ca/73/40ca73fab872f7a10f66f3dcafd09585.gif",
            "https://media.tenor.com/images/88bca0d7f2c12290db85b366d57c7d04/tenor.gif"
              
                ]

  
    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Aburrido ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +'** Esta Aburrido  ``💢`` ')
  .setImage(bite[Math.floor(Math.random() * bite.length)])
    .setFooter(message.author.tag, message.author.avatarURL)
  
      
        message.channel.send({embed});
  
}  