exports.run = async (client, message, args) => {
const Discord = require ('discord.js')
const color = 'RANDOM';
const osu = require('node-osu');
const api = new osu.Api("6f55a47fd3af51e5efa1046a50697503442df67b" , {
    notFoundAsError: true,
    completeScores: false 
})

let username = args[0]
  
   let texto = args.join(" "); 
  if (!args[0]) 
    var uwu = new Discord.RichEmbed()
    .setAuthor("Andrew | Osu Ejemplo", client.user.avatarURL)
    .setDescription ("Te Daremos las Estadisticas del usuario en Osu")
    .addField("Ejemplo","a!osu (Nombre del user)")
    .setColor("RANDOM")
    
    
 if(!texto)  return message.channel.send(uwu)
  
api.getUser({u: username}).then(user => {
  const embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Osu Stats", client.user.avatarURL)
  .setDescription("Este es el perfil de **" + user.name + "** en Osu del usuario! ``🤹🏻‍``")
  .setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
  .setColor(color)
  .addField('``💬`` | Nombre', user.name, true)
  .addField('``🔷`` | PP', Math.round(user.pp.raw), true)
  .addField('``🏆`` | Rank', user.pp.rank, true)
  .addField('``🆙`` | Nivel', Math.round(user.level), true)
  .addBlankField()
  .addField('``🌁`` | Pais', user.country, true)
  .addField('``🏰`` | Ranking De Ciudad', user.pp.countryRank, true)
  .addField('``📟`` | Cuenta De Juego', user.counts.plays, true)
  .addField('``🎯`` | Punteria', `${user.accuracyFormatted}`, true)
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  message.channel.send(embed)
  
})

}
  