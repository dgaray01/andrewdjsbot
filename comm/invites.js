 
exports.run = (client, message, args) => {
  const Discord = require('discord.js')
  
message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} **tiene ${inviteCount} invitaciones.**`);
  message.delete()
});
  }                                 