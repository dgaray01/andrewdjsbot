
exports.run = (client, message, args) => {
  const Discord = require('discord.js')
const embed = new Discord.RichEmbed() 

 .setAuthor(' Andrew | Comandos ',client.user.avatarURL)
    .setColor("RANDOM")
    .setDescription("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
    .setFooter("Andrew", client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()

   .addField("**「``🤖``」 •  Bot**",
      "`setprefix bot esay say esay2 esay3 stats giveaway`")
   .addField("**「``💾``」 •  Utiles**",
      "`clear estado ping discordping avatar canales roles encuesta encuesta2 user serverinfo miembros`")
    .addField("**「``🔧``」  Moderación**.",
      "`ban idban unban kick tempmute warn warns `")
    .addField("**「``🌐``」•  Busqueda**.",
      "`google clima anime meme dog bird lagarto cat food translate osu lyrics`")
    .addField("**「``📸``」•  Edicion de IMG**.",
      "`blur pixel invert grey color`")
    .addField("**「``👘``」•  Anime**.",
      "`waifu kawaii loli trapito husbando olo kemonomimi foxgirl ratewaifu`")
    .addField("**「``🤹🏻‍``」 •  Diversión**",
      "`respect quieroeso f ship trump basura drake logro triggered susto arte olvido bart logromc psicopata bob 8ball ship rps login`")
    .addField("**「``🤝``」•  Interacion**.",
      "`punch slap feed kiss hug pat smug kill baka tickle cuddle poke`")
    .addField("**「``👣``」•  Reacciones**.",
      "`happy cry dance suicide lick punch slap feed kiss hug pat smug kill baka tickle cuddle poke fbi run bath like wasted confused highfive bite bored fly boom sword teleport drive jump facepalm tortura angry sleep shrug`")
    .addField("**「``🧩``」•  Extras**.",
      "`redes invite hee a-trapo niconico valiste `")
    .addField("**「``📯``」•  Premium**.",
      "Escribe ``a!premium`` para más información.")
   
    .addBlankField(true)    
message.channel.send(embed)
  
}