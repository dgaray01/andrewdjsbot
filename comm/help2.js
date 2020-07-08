
const Discord= require("discord.js")

exports.run = async (client, message, args) => { 
  
    const embed = new Discord.RichEmbed() 
    .setAuthor("💡 | Comando de ayuda:")
    .setDescription('**Soy Andrew, un bot publico multi funciones**')
    .setColor('0x00AE86')
    .setThumbnail(client.user.avatarURL)
    //.setImage('https://cdn.discordapp.com/avatars/543567770579894272/e7d65b0aab2122a6a00733d8b6fe2b55.png')
    //.setImage('https://i.imgur.com/BwPBeG9.gif')
    .setFooter("Version ∞", client.user.avatarURL)
    .addField("__**:pushpin: Prefix**__", '`a`', false)
    .addField("__**:scroll: Lista de comandos**__", '`acommands`', false)
    .addField("__**:desktop: Desarrolladores**__", '`@ȻħᶖꝃṏŜħᶖᵭṏᵲᶖ [𝓤.𝓒]#1111`, `@💀EXECUTE ORDER 66 🔥#2511`', false)
     .addField("**「`📲`」•  Redes Sociales**.","[Twitter](https://twitter.com/ChikoShidori?s=09) | [Página web](https://Youtube.com/) | [Invita a tus amigos](https://discord.gg/AS94sFH) | [Server](https://discord.gg/AS94sFH)")
 
    message.channel.send({embed});
  
  
  
    
  
} // Cierre del command handler