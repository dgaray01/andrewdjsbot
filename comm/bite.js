const client = require('nekos.life');
const neko = new client();
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first(); 
let bite = ["https://media.giphy.com/media/fhkRUj3BWmMnu/giphy.gif",
                "https://thumbs.gfycat.com/UniqueThickGalapagosalbatross-small.gif",
                "https://media1.tenor.com/images/a832fbb94fc69c07c96ea34c61568e76/tenor.gif",
                "https://66.media.tumblr.com/02f5ba904dc9d496c4b8f26b888c600a/tumblr_p9q47d4wNo1xuvoi1o1_400.gif",
                "https://pa1.narvii.com/6206/ede2a18b479c1a4b95bfa444559a1d3b4b3fcb0b_hq.gif",
                "https://66.media.tumblr.com/206dbf12d5a0e790796057d34f2f633c/tumblr_o0lb77IGsn1u9u1mvo1_400.gif",
                "https://i.pinimg.com/originals/95/f2/65/95f26583cf78588b64cb7bb98a6fb69d.gif",
                "https://media1.tenor.com/images/6b42070f19e228d7a4ed76d4b35672cd/tenor.gif",
                "https://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-4.gif",
                "http://pa1.narvii.com/6045/a9bb6d864ebe7e01ed647b78fc652f15116716c4_hq.gif",
                "http://pa1.narvii.com/6045/403dcd5f8d1d71c32ee4c5427204bc8f00646183_hq.gif",
                "https://i.gifer.com/Bto7.gif",
                "https://media1.tenor.com/images/b917529c89893ca5a281c8d282192248/tenor.gif",
                "https://66.media.tumblr.com/903ab7ed344fc2dc50ec6b89fcdf278b/tumblr_oqb558oc1G1ujwg5zo1_500.gif",
            "https://image.myanimelist.net/ui/4Uqv6c4qu88OmaYh1hBUOfARoB4-wUoSq7QG4TSsvkaO2-NsvLJ-zHHTMUyE7Vz6"
              
                ]
           
 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Morder Ejemplo", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien para morderle!")
  .addField("Ejemplo : ", "**jn!bite (@Mencion)**")
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  

  if(!texto)  return  message.channel.send(embud);
  
    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Morder ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +'** Le Dio un Mordisco a **'+ user.username +' ** ``👄🦷`` ')
  .setImage(bite[Math.floor(Math.random() * bite.length)])
    .setFooter(message.author.tag, message.author.avatarURL)
  
      
        message.channel.send({embed});
  
}  