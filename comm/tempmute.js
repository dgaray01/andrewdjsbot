const ms = require("ms");
exports.run = async (client, message, args) => {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); 
     let muterole = message.guild.roles.find(r => r.name === 'Muted');

  if (!tomute) return message.channel.send('``🆔`` **Menciona o ingresa la ID de alguien**')
  
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muteado",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false, 
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
      let mutetime = args[1];
  if (!mutetime) return message.channel.send('``⏰`` Ingresa el tiempo a mutear\n*1h* *1m* *1sg*')

    message.delete().catch(O_o => {});
      message.channel.send('El usuario '+tomute+' ha sido temporalmente muteado\nTiempo: '+mutetime+'\nPor el staff: '+message.author);
    await (tomute.addRole(muterole));

    setTimeout(function() {
        tomute.removeRole(muterole);
        message.channel.send(`<@${tomute.id}> has unmuted`);
    }, ms(mutetime));
}