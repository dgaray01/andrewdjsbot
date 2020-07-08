const google = require("google");
const Discord = require("discord.js")
exports.run = (client, message, args) => {
  
let text = args.join(" ")
google.resultsPerPage = 1
google.protocol = 'https'
let contandor = 0;

let iconGoogle = "https://i.pinimg.com/originals/59/9b/69/599b699d72030e01088a62de49bd710b.gif";
  
google(text, function (err, res) {
    if (err) console.log(err);

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      if (link.title == null) {
      return message.channel.send('No se encontraron resultados.');
      }
      if (link.href == null)    {
       return message.channel.send('No se encontraron resultados.');
      }


      const gEmbed = new Discord.RichEmbed()
        .setAuthor(`Resultados De La Busqueda ${text}`)
        .setColor('RANDOM')
        .setThumbnail(iconGoogle)
        .addField('**Sitio Web**', link.title)
        .addField('**Descripcion**', link.description)
        .addField('**URL**', link.href)


      
  message.channel.send(gEmbed)
  
  
     }

  });
}