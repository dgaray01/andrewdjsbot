const Discord = require('discord.js');
const translator = require("yandex-translate")
("trnsl.1.1.20190502T135603Z.ebd196644805c129.def1b42612afe8094a12b4638ea0dc51c33a259e");
exports.run = async (client, message,args) => {
  
  
   let busqueda = args.join(' ');
  
   const embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Ejemplo de Traduccíon", client.user.avatarURL)
   .setDescription("Necesitas ingresar el idioma al cual se traducirá tu mensaje, ejemplo **[en] Hola mundo**")
   .addField("Syntax","prefix + comando [languaje] [mensaje]")
   .addField("Idiomas ejemplos","en (Ingles),es (español) y otros..")
   .setColor("RANDOM")
   .setImage("https://cdn.dribbble.com/users/502247/screenshots/5624935/final_composition_option_4_.gif")
   .setFooter(message.author.tag, message.author.avatarURL)
   .setTimestamp(message.createdAt)
if (!busqueda) return message.channel.send(embed);
  
    let lang = args[0]; // Obtendra el languaje en el argumento 0 que seria el texto despues del comando
    let msg = args.slice(1).join(' '); // Aca obtendra el mensaje a traducir despues del argumento 0.
    
    translator.translate(msg, { to: lang}, function(err, res) { 
      const era = new Discord.RichEmbed()
        if(err) return message.channel.send(`Ocurrió un error al tratar de traducir el mensaje, error: ${err}`)
      
        const Trad = new Discord.RichEmbed()
        .setAuthor("Andrew | Traducción", client.user.avatarURL)
        .setDescription(`${message.member}`+" Aca la traducion ``➡️``"+` ${res.text}`)
        .setColor("RANDOM")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp(message.createdAt)
        .setImage('https://cdn.dribbble.com/users/865730/screenshots/5333886/translate.gif')
      message.channel.send(Trad)
     })
     return;
}
