
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
      "`setprefix bot esay say esay2 esay3 stats `")
   .addField("**「``💾``」 •  Utiles**",
      "`clear estado ping afk discordping avatar canales roles encuesta encuesta2 sugerencia iserver user serverinfo miembros invsv`")
    .addField("**「``🔧``」  Moderación**.",
      "`ban idban unban kick tempmute warn `")
    .addField("**「``🎧``」•  Musica (Beta)**.",
      "`play skip stop volume playing queue pause resume`")
    .addField("**「``🌐``」•  Busqueda**.",
      "`clima anime meme dog bird lagarto cat food translate fortnite osu roblox`")
    .addField("**「``🌲``」  Minecraft**.",
      "`mcface mcskin mcstats`")
    .addField("**「``👘``」•  Anime**.",
      "`waifu kawaii loli trapito husbando nekogif neko holo kemonomimi foxgirl ratewaifu`")
    .addField("**「``🤹🏻‍``」 •  Diversión**",
      "`respect quieroeso ship trump basura drake logro triggered susto arte olvido bart logromc psicopata bob retro 8ball ship rps login wanted batslap vr beautiful`")
    //.addField("**「``🤝``」•  Interacion**.",
     // "`punch slap feed kiss hug pat smug kill baka tickle cuddle poke`")
    .addField("**「``👣``」•  Reacciones**.",
      "`happy cry dance suicide lick punch slap feed kiss hug pat smug kill baka tickle cuddle poke fbi run bath like wasted confused highfive bite bored fly boom sword teleport`")
    .addField("**「``🧩``」•  Extras**.",
      "`redes invite hee a-trapo donar brillance bravery `")
    .addField("**「``📯``」•  Premium**.",
        "Escribe ``a!premium`` para más información.")
    
.setImage("https://images-ext-2.discordapp.net/external/MCQifbt2kXf1vlcGg9qGPAfJTz-xvrM3buMst03I3XA/https/i.imgur.com/BwPBeG9.gif")
message.channel.send(embed)
  
}