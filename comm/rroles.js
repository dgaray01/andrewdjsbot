
exports.run = (client, message, args, sql, Discord) => {
  sql.all(`SELECT roleName, level FROM levelRoles WHERE guildID = '${message.guild.id}' ORDER BY level ASC`).then(rRow =>{
    if(!rRow[0]){
      var rlOut = "Aun no se crea ningun rol por nivel!";
    }else{
      var rlName = rRow.map(z=>z.roleName);
      var rlLevel = rRow.map(x=>x.level);
      var rlOutp = rlLevel.map(function(a,b){
        return['L: ' + `**${a}**` + '  N: ' + `**${rlName[b]}**`];
      })
      var rlOut = rlOutp.join("\n");
    }
    var embed = new Discord.RichEmbed()
       .setAuthor('Andrew | Configuracion ',client.user.avatarURL)
      .setDescription(`**Roles de Niveles Para ${message.guild.name} server**`)
      .setColor(0x00AE86)
      .setThumbnail(message.guild.iconURL)
      .addField("Roles", `${rlOut}`, false)
    .setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
    message.channel.send({embed: embed});
  });
}
