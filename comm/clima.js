const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (result === undefined || result.length === 0) {
          message.reply('**tienes que escribir el nombre de una Ciudad o de un País**')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setAuthor("Andrew | Clima", client.user.avatarURL)
          .setDescription("**Mira el Clima que hace ahora!**")
          .addField(` Tiempo para **${current.observationpoint}**`, `Ahora mismo está **${current.skytext}**`)
          .setThumbnail(current.imageUrl)
          .setColor("RANDOM")
          .addField('``🔭`` Coordenadas',`${location.lat},`+` ${location.long}`)
          .addField('``🌎`` Zona Horaria',`UTC${location.timezone}`)
          .addField('``🌡️`` Temperatura',`${current.temperature} Grados`, true)
          .addField('``📡`` Tipo de Grado',`Grado Celsius (ºC) `, true)
          .addField('``📅`` Fecha',`${current.date}` + ` ${current.shortday}`, true)
          .addField('``➰`` Vientos',current.winddisplay, true)
          .addField('``⛲️`` Humedad', `${current.humidity}%`, true)
          .setFooter(message.author.tag, message.author.avatarURL)
          .setTimestamp(message.createdAt)
          .setImage("https://i.pinimg.com/originals/e7/7a/60/e77a6068aa8bb2731e3b6d835c09c84c.gif")
          message.channel.send({embed});
  })
  
}