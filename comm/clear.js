const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("``❌`` | Lo siento **" + message.author.tag + "** pero no puedo dejarte usar este comando porque no tienes los permisos necesarios!");
  let numero = parseInt(args.join(" "));
  if (isNaN(numero)) {
    return message.reply("Por favor ingrese un numero valido.")
  } else if (numero <= 0 || numero > 100) {
    return message.reply("debe ingresar un numero del 1 al 99")
  }
  message.channel.bulkDelete(numero).then(m => {
    let embed  = new Discord.RichEmbed()
    .setAuthor("Andrew | Clear ", client.user.avatarURL)
    .setColor("RANDOM")
    .setDescription ("Se eliminaron los **" + numero + "** mensajes correctamente.")
    .setThumbnail("https://cdn.dribbble.com/users/121630/screenshots/1860174/dribbble_close_clear_ui.gif")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp(message.createdAt)
    // 
    message.channel.send(embed).then(msg => {
    msg.delete(8000); // ya esta
    
    }).catch(e => {
    console.log(e);
    
      let embed2  = new Discord.RichEmbed()
    .setAuthor("Andrew | Clear Error ", client.user.avatarURL)
    .setColor("RANDOM")
    .setDescription ("Al parecer ocurrio un error al intentar borrar los mensajes de este canal.")
    .addField("Posibilidades de :", "No Tener Permisos de Administrador de Mensajes Porfavor mire mis permisos")
    .addField("Sigo sin Funcionar?", "Porfavor entre a soporte para ayuda")
    .setThumbnail("https://cdn.dribbble.com/users/121630/screenshots/1860174/dribbble_close_clear_ui.gif")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp(message.createdAt)

    message.channel.send(embed2)
  });
})

} 