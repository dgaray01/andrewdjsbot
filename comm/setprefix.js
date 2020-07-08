const Discord = require('discord.js')
const db = require('megadb');
let prefix_db = new db.crearDB('prefixes');
exports.run = (bot, message, args ) => {
  //const staff = ["478572042384572424", "340372875456282626", "377278407332986883", "498909471565807638", "393382613047574530", "585599204492181513", "531657717526298634", "541739245916782594", "372505656537776128", "498937857394737162", "279416182128246785", "384366680622497793", "219320252071280640", "335193784218550273", "242357417478848512", "492307736399183872", "425044099482255360"]   
//if (!staff.includes(message.author.id)) return message.channel.send(noperms);
  
  const noperms = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription('No tienes permiso de ``ADMINISTRADOR`` para poder cambiar el prefix.')
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(noperms);
  
  const noargs = new Discord.RichEmbed()
  .setAuthor("Andrew | Cambiar Prefix","https://cdn.discordapp.com/avatars/597957157509398539/e15135decdfb13e17187489bb3f3420d.png?size=2048")
  .setDescription('Necesitas agregar un prefix!')
  .addField("Ejemplo:"," a!setprefix (a)")
  .setColor("RANDOM")
  .setImage("https://i.gyazo.com/b84e87ccadca493af8d1fccbb50bbcf3.png")
  if (!args[0]) return message.channel.send(noargs);
  
 prefix_db.establecer(`${message.guild.id}`, args[0])
  const embed = new Discord.RichEmbed()
  .setDescription('El prefix fue cambiado correctamente a `'+args[0]+'`')
  .setAuthor("Andrew | Prefix Cambiado","https://cdn.discordapp.com/avatars/597957157509398539/e15135decdfb13e17187489bb3f3420d.png?size=2048")
  .setThumbnail("https://i.imgur.com/Z5X7Sy5.gif")
  .setColor("RANDOM")
  message.channel.send(embed).then(m => m.react)

}
