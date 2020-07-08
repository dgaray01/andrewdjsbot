const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
    const logsDB = new client.megadb.crearDB("logs")

    let canal = message.mentions.channels.first();
    let perms = message.member.hasPermission("ADMINISTRATOR")


    if (!perms) return message.channel.send("No tienes los permisos suficientes")
    if (!canal) return message.channel.send("Menciona algun canal!")

    logsDB.establecer(message.guild.id, canal.id).then(O_o => {
      message.channel.send("El canal de logs ha sido establecido correctamente.")
    })
}
//si tuviera acceso a tu voz podria ver que esta mal xde o mira tus logs digo los logs al poner el comando
//esa madre del canal.setName lo tienes mal :v
//lo arreglastes el panel?
//YA creo que definiste un canal mal
// soyu n pinshis geniu s ahre :v
// a l v se callo discord :v
//EL BOT MURIO khe
