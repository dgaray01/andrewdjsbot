const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  
  //return message.channel.send("**NW** » Comando en mantenimiento.")
  let mensaje = args.join(" ")
  if(!mensaje) return message.reply("❌| Porfavor pon un mensaje")

var rpts = ["Es cierto.", 
            "Es decididamente así.", 
            "Sin duda.", 
            "Sí definitivamente.", 
            "Puedes confiar en ello.",
						"Como yo lo veo, sí",
						"Lo más probable.",
						"¡Claro!",
						"Sí.",
						"Las señales apuntan a que sí.",
						"Respuesta confusa, intenta otra vez.",
						"Pregunta de nuevo más tarde.",
						"Mejor no quiero decirte ahora.",
						"No se puede predecir ahora.",
						"Concéntrate y pregunta otra vez.",
						"No cuentes con ello.",
						"Mi respuesta es no.",
						"Mis fuentes dicen que no.",
						"La perspectiva no es tan buena.",
						"Muy dudoso."];

//var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente", " ¡Claro! "," Sí "," No "," ¡Por supuesto! "," Por supuesto que no "];
  
     const embed = new Discord.RichEmbed()
    
    .setAuthor("Andrew | 8ball Ejemplo", client.user.avatarURL)
  .setDescription('**8ball te dice tu futuro**')
    .addField("Ejemplo: ","``a!8ball (Pregunta)``")
  .setTimestamp()
  .setImage("https://cdn.dribbble.com/users/264259/screenshots/1860410/attachments/313225/8-ball.gif")
 .setColor("RANDOM")
   if (!mensaje) return message.channel.send(embed)
    //message.channel.send(message.member.user+' a su pregunta `'+mensaje+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
  const ballEmb = new Discord.RichEmbed()

  .setAuthor("Andrew | 8Ball ", "https://images-ext-2.discordapp.net/external/mWXAXuhZXCpM62hmnFI0YK_OCqMc8uYOLAG518ekZnE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png")
    .setDescription("Pregunta a 8Ball tu futuro")
      .addField('``❔`` Pregunta : '+mensaje, "**Respuesta :** "+rpts[Math.floor(Math.random() * rpts.length)])
      .setColor("RANDOM")
         .setFooter(message.author.tag, message.author.avatarURL)
  .setTimestamp(message.createdAt)
  .setThumbnail("https://cdn.dribbble.com/users/264259/screenshots/1860410/attachments/313225/8-ball.gif")
			message.channel.send({embed: ballEmb})
}