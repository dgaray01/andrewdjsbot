  const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async(bot, message, args, prefix) => {
  let winners;
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("No tienes los permisos `ADMINISTRAR SERVIDOR` para crear un sorteo.");
  const filter = m => m.author.id === message.author.id;
  await message.channel.send(new Discord.RichEmbed()
                      .setColor("RANDOM")
                      .setDescription("🎉 | Listo para crear un sorteo, primero mencione el canal.")
                      .setFooter("Tienes 60 segundos para mencionar el canal. | Para cancelar escribe [cancel]."))
  await message.channel.awaitMessages(filter, {
    max: 1, 
    time: 60000
  }).then(async collected => {
  
    if(collected.first().content === "cancel") {
      return await message.channel.send(new Discord.RichEmbed()
                                 .setColor("RANDOM")
                                 .setDescription("🛑 | Comando cancelado."));
    }
    
    
    let canal = collected.first().mentions.channels.first()
    if(!canal) return await message.channel.send(new Discord.RichEmbed()
                                           .setColor("RANDOM")
                                           .setDescription("🛑 | No ha mencionado ningun canal, comando cancelado."))
    
    await message.channel.send(new Discord.RichEmbed()
                         .setColor("RANDOM")
                         .setDescription("🎉 | **¡Perfecto!**, has elegido "+canal+", ahora escribe lo que vas a sortear.")
                         .setFooter("Tienes 60 segundos para escribir. | Para cancelar escribe [cancel]."))
    await message.channel.awaitMessages(filter, {
     max: 1,
     time: 60000
    }).then(async collected => {
    
      if(collected.first().content === "cancel") {
      return await message.channel.send(new Discord.RichEmbed()
                                 .setColor("RANDOM")
                                 .setDescription("🛑 | Comando cancelado."));
      }
      let cosaasortear = collected.first().content;
      
      await message.channel.send(new Discord.RichEmbed()
                          .setColor("RANDOM")
                          .setDescription("🎉 | **¡Genial!**, vas a sortear `"+cosaasortear+"`, ahora escribe cuanto va a durar el sorteo. [ 1s (Segundo), 1m (Minuto) 1h, (1Hora) , 1d (1 Dia) ]")
                          .setFooter("Tienes 60 segundos para escribir. | Para cancelar escribe [cancel]."))
      
    await message.channel.awaitMessages(filter, {
      max: 1,
      time: 60000
    }).then(async collected => {
      if(collected.first().content === "cancel") {
      return await message.channel.send(new Discord.RichEmbed()
                                 .setColor("RANDOM")
                                 .setDescription("🛑 | Comando cancelado."));
      }
      let tiempo = collected.first().content;
      
      await message.channel.send(new Discord.RichEmbed()
                          .setColor("RANDOM")
                          .setDescription("🎉 | **¡Increible!**, el sorteo va a durar `"+tiempo+"`, ahora ingresa la cantidad de ganadores."))
    await message.channel.awaitMessages(filter, {
      max: 1,
    time: 60000
    }).then(async f => {
      
    
    if(f.first().content === "cancel") {
      return await message.channel.send(new Discord.RichEmbed()
                                 .setColor("RANDOM")
                                 .setDescription("🛑 | Comando cancelado."));
    }
      
    winners = f.first().content
    
    await message.channel.send(new Discord.RichEmbed()
                          .setColor("RANDOM")
                          .setDescription("🎉 | **¡Increible!**, la cantidad de ganadores es de `"+winners+"`, el sorteo esta iniciando en "+canal+"."))
      await canal.send(new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle("🎉: ¡nuevo sorteo!")
                .setDescription(`**Sorteo de:** \`${cosaasortear}\`\n**Tiempo:** \`${tiempo}\`\n**Ganadores**: \`${winners}\``)
                .setFooter("Reacciona con 🎉 para participar.")).then(async msg => {
        await msg.react("🎉").then(async e => {
        
        let reaction = await msg.awaitReactions(reaction => reaction.emoji.name === "🎉", { time: ms(tiempo)-1000});
          
          let winnerss = []
         
        setTimeout(async function() {
          if(reaction.get('🎉').users.size < winners) return message.channel.send(new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setDescription("🛑 | Lo usuarios que participan no son los necesarios para el sorteo, faltan "+winners-reaction.get('🎉').users.size))
          for(var i=0; i <= winners--; i++) {
          const users = await reaction.get('🎉').users.filter(u => u.id !== msg.author.id & !u.bot & !winnerss.includes(`<@${u}>`));
          let winner = users.randomKey()
          winnerss.push(`<@${winner}>`)
          }
          
         await msg.edit(new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle("🎉: ¡Sorteo Finalizado!")
                .setDescription(`**Sorteo de:** \`${cosaasortear}\`\n**Ganador(es):** ${winnerss.map(x => x).join(', ')}`))
          canal.send(`🎉 ${winnerss.map(x => x).join(', ')} Felicidades, **¡has ganado \`${cosaasortear}\`!** 🎉`);
        }, ms(tiempo)-800);
          
        });
      });
    }).catch(async collected => {
    await message.channel.send(new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setDescription("🛑 | Se agotó el tiempo, comando cancelado."))
  });
    }).catch(async collected => {
    await message.channel.send(new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setDescription("🛑 | Se agotó el tiempo, comando cancelado."))
  });
  }).catch(async collected => {
    await message.channel.send(new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setDescription("🛑 | Se agotó el tiempo, comando cancelado."))
  });
    
  }).catch(async collected => {
    await message.channel.send(new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setDescription("🛑 | Se agotó el tiempo, comando cancelado."))
  });

}