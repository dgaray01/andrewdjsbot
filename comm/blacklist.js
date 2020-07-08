exports.run = (client, message, args, sql, Discord) => {
  let uAccess = message.guild.roles.find("name", "AndrewMod");
  if(!uAccess){
    message.reply("Haga un rol llamado \AndrewMod\ y asígnelo usted mismo para poder usar este comando.");
  }else{
    if(message.member.roles.has(uAccess.id)){
        let condition = args[0];
        if (condition == "add"){
            let pRole = args.splice(1);
            let bRole = message.guild.roles.find("name", pRole.join(" "));
            if (!bRole){
                message.reply(`Ningún rol encontrado ${pRole.join(" ")}. Recuerda que es sensible a las mayúsculas..`);
            }else{
                sql.run(`INSERT INTO bListRoles (guildID, roleName, roleID) VALUES (?,?,?)`, [message.guild.id, bRole.name, bRole.id]);
                message.reply(`${pRole.join(" ")} Se ha añadido a la lista negra del sistema de puntos.`);
            }
        }else if(condition == "remove"){
            let pRole = args.splice(1);
            let cRole = message.guild.roles.find("name", pRole.join(" "));
            if(!cRole){
                message.reply(`Ningún rol encontrado ${pRole.join(" ")}. Recuerda que es sensible a las mayúsculas.`);
            }else{
                sql.run(`DELETE FROM bListRoles WHERE guildID = ${message.guild.id} AND roleID = ${cRole.id}`);
                message.reply(`${cRole.name} ha sido eliminado de la lista negra`);
            }
        }else{
            message.reply("Por favor use las condiciones agregar o quitar.")
        }
    }else{
        message.reply("Lo sentimos, no tienes acceso a este comando.");
    }
  }//uAccess not made else
}