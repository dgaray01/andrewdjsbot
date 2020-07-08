const Discord = require("discord.js")
exports.run = (client, message, args) => {
  
let user = message.mentions.users.first();
                let razon = args.slice(1).join(" ")
  
                var perms = message.member.hasPermission("KICK_MEMBERS");
  
                if(!perms) return message.channel.send("No tienes el permiso `Expulsar Miembros`.");
                if (message.mentions.users.size < 1) return message.reply('Solo menciona a un usuario.').catch(console.error);
  
                if (!razon) return message.channel.send('Escribe una razón, `a!kick @username [razón]`');
                if (!message.guild.member(user).kickable) return message.reply('No puedo expulsar al usuario mencionado.');
  
                message.guild.member(user).kick(razon);
                const embed = new Discord.RichEmbed()
                    .setAuthor("Andrew | Expulsion", client.user.avatarURL)
                    .setThumbnail("https://cdn.dribbble.com/users/1030309/screenshots/5491057/bf-box.gif")
                    .addField("``🚷`` Usuario expulsado", user)
                    .addField("``📋`` Razón", razon)
                    .addField("``🆔`` ID", user.id)
                    .addField("``🔧`` Moderador", message.author)
                    .addField("``📡`` Canal", message.channel)
                    
           message.channel.send(embed)
  message.guild.kick(user)
  
  
  
  //message.channel.send(`**${user.username}** was ejected from the server, reason: ${razon}.`);
                }