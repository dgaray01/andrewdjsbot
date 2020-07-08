const Discord = require("discord.js")
exports.run = (client, message, args) => {
let highfive = ["https://cdn.discordapp.com/attachments/585625221734858789/585659865788055562/1.gif",
                "https://cdn.discordapp.com/attachments/585625221734858789/585659877461065748/2.gif",
                "https://cdn.discordapp.com/attachments/585625221734858789/585659934394548254/3.gif",
                "https://cdn.discordapp.com/attachments/585625221734858789/585659949716340742/4.gif",
                "https://cdn.discordapp.com/attachments/585625221734858789/585659964182495232/5.gif",
                "https://cdn.discordapp.com/attachments/585625221734858789/585659994209255425/6.gif",
                "https://cdn.discordapp.com/attachments/585625221734858789/585660006213484545/7.gif",
                "https://cdn.discordapp.com/attachments/585625221734858789/585660025968525312/8.gif",
                "https://cdn.discordapp.com/attachments/585625221734858789/585660047321989180/9.gif",
                "https://cdn.discordapp.com/attachments/585625221734858789/585660062824005655/10.gif",
                "https://i.pinimg.com/originals/9b/25/76/9b25765939482946dbbf7ce7af5f9d49.gif",
                "https://i.pinimg.com/originals/17/0b/2d/170b2d511efc778b86d58fa12d66c0cb.gif",
                "https://media1.tenor.com/images/16267f3a34efb42598bd822effaccd11/tenor.gif",
                "https://media1.tenor.com/images/d9789c904472970f6654633ac2b03aa1/tenor.gif",
                "https://media1.tenor.com/images/ce85a2843f52309b85515f56a0a49d06/tenor.gif",
                "https://media1.tenor.com/images/90c78edd53e8d9080aaf2c6ea222f672/tenor.gif",
                "https://media1.tenor.com/images/e96d2396570a2fadd9c83e284a1ca675/tenor.gif",
                "https://media1.tenor.com/images/790521dda26a2cbc2b485a7aaf87819c/tenor.gif",
                 "https://media1.tenor.com/images/242a90dce620ebe6004a72a965569fda/tenor.gif",
                 "https://media1.tenor.com/images/c076c00f65d1e8cd1e54355507bd1e6b/tenor.gif",
                 "https://media1.tenor.com/images/7260de84934377ca0004358e356170f6/tenor.gif",
                 "https://media1.tenor.com/images/309c036b3bcba336e448169aec4189b3/tenor.gif",  
                ]

  
  let user = message.mentions.users.first(); 

           
 let texto = args.join(" ");
    let embud = new Discord.RichEmbed()
  .setAuthor("Andrew | Highfive", client.user.avatarURL)
  .setDescription ( "Debes Mencionar a Alguien para chocar los cincos! ``🖐🏻``")
  .addField("Ejemplo : ", "**a!highfive (@Mencion)**")
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
  

  if(!texto)  return  message.channel.send(embud);
  
    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Highfive", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Dio los Cinco a '+ user.username +' ** ``🖐🏻`` ')
  .setImage(highfive[Math.floor(Math.random() * highfive.length)])
    .setFooter(message.author.tag, message.author.avatarURL)
  
      
        message.channel.send({embed});
  
}