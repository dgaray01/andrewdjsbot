/*const Discord = require("discord.js")
exports.run = (client, message, args) => {
let userm = message.mentions.users.first()

                if(!userm){
                  var user = message.author;
                      
                  const embed = new Discord.RichEmbed()
                  .setThumbnail(user.avatarURL)
                  .setAuthor("JaponLite | Informacion de ti", client.user.avatarURL)
                  .addField('``📟`` Nombre', message.author.username,true)
                  .addField('``🆔`` ID', user.id, true)
                  .addField('``📇`` Apodo', message.member.nickname, true)
                  .addField('``📖`` Avatar', "[``⏩`` Dale Click Aquí ``⏪``](" + user.avatarURL + ")",true)
                  .addField('``🎮`` Jugando a', user.presence.game != null ? user.presence.game.name : "a Nada", true)
                  .addField('``🎭`` Estado', user.presence.status, true)
                  .addField('``📲`` Cuenta creada', user.createdAt.toDateString(), true)
                  .addField('``📡`` Ultima Fecha de Ingreso', message.member.joinedAt.toDateString(), true)
                  .addField('``💡`` Roles', message.member.roles.map(roles => roles).join(', '), true)
                  .setColor("RANDOM")
                    .setFooter(message.author.tag, message.author.avatarURL)
                    .setTimestamp(message.createdAt)
                        
                  message.channel.send({ embed });
                
                }else{
                  const embed = new Discord.RichEmbed()
                  .setThumbnail(userm.avatarURL)
                  .setAuthor("JaponLite | Informacion de los Usuarios", client.user.avatarURL)
                  .addField('``📟`` Nombre', userm.username,true)
                  .addField('``🎮`` Jugando a', userm.presence.game != null ? userm.presence.game.name : "a Nada", true)
                  .addField('``🆔`` ID', userm.id, true)
                  .addField('``📖`` Avatar', "[``⏩`` Dale Click Aquí ``⏪``](" + userm.avatarURL + ")",true)
                  .addField('``🎭`` Estado', userm.presence.status, true)
                  .addField('``📲`` Cuenta creada', userm.createdAt.toDateString(), true)
                  .addField('``📡`` Ultima Fecha de Ingreso', message.member.joinedAt.toDateString(), true)
                  .addField('``💡`` Roles', message.member.roles.map(roles => roles).join(', '), true)
                    .setColor("RANDOM")
                    .setFooter(message.author.tag, message.author.avatarURL)
  .setTimestamp(message.createdAt)
                    
                  message.channel.send({ embed });
                
                }
}*/


//Define discord-js
const Discord = require('discord.js');

//Define moment
const moment = require("moment");

exports.run = async (client, message, args) => {
	//message.channel.send("en mantenimiento")
  let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	//Define the member of a guild.
    const member = message.guild.member(user);
	



let estadosuser = {
  "online": "<a:plexiOnline:599445590883172352> **Online**",
  "idle": "<a:orange:599447813046140938> **Ausente**",
 "dnd": "<a:red:599447828934164480> **No Molestar**", 
"offline": "<a:plexiOffline:599448174746140722> **Offline**"
};

 const permisos = new Discord.Permissions(message.member.highestRole.permissions).toArray().join(" ")

  const embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
    .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
    .addField('``🎮`` Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
    .addField('``📟`` Nombre', user.username,true)
    .addField('``📇`` Apodo', `${member.nickname !== null ? `${member.nickname}` : 'No Tiene Alias'}`, true)
    .addField('``🆔`` ID', user.id, true)
    .addField('<:Bot:600150325441069073> Bot:', `${user.bot ? 'Si.' : 'No :x:.'}`, true)
		.addField('``📲`` Cuenta creada', user.createdAt.toDateString(), true)
		.addField('``📲`` Unido Al Server', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
    .addField('``📖`` Avatar', "[``⏩`` Dale Click Aquí ``⏪``](" + user.avatarURL + ")",true)
    .addField('``💡`` Roles', member.roles.map(r => r).join(" **|** "))
    .addField('``💡`` Rol Más Alto', member.highestRole)
    //.addField("Permisos",  message.member.permissions.toArray(perms => perms).join("\n"))
   .addField('``💡`` Permisos',  `\`\`\`${message.guild.member(user).permissions.toArray(perms => perms).join(" ")}\`\`\``) 
  .setColor(0x66b3ff)
        
  message.channel.send(embed);

}