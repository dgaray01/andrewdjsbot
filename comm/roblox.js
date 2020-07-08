
exports.run = async (client, message) => {
const Discord = require ('discord.js')
//////////////////////////////////////////
    const jsroblox = require('js-robloxapi');
    //////////////////////////////////////////
    let args = message.content.split(' ').slice(1).join(' ');
    jsroblox.getInfo(args, (data) => {
      let ambed = new Discord.RichEmbed()
      .setAuthor("Andrew | Roblox Ejemplo", client.user.avatarURL)
      .setDescription("Te daremos un ejemplo como buscar un usuario de roblox!")
      .addField("Ejemplo : ", " *a!roblox (Nombre de Usuario!)*")
      .addField("Si no sale Nada","Es Porque no existe el usuario o pusiste mal el nombre!")
      .setColor("RANDOM")
      .setThumbnail("https://media.redadn.es/imagenes/roblox-android-ios-pc-xbox-one_311625.jpg")
      
    if (!data) return message.channel.send(ambed) 
    const embed = new Discord.RichEmbed()
    //.setAuthor("ROBLOX", data.AvatarMin)
    .setAuthor("Andrew | Roblox Usuario", client.user.avatarURL)
    .setDescription("Mira Cada Infromacion del Jugador de Roblox")
    .addField(' ``💬`` | Roblox Nombre : '  + data.Name , "*Nombre de Usuario*")
    .addField(' ``🆔`` | Roblox ID : ' + ` ${data.Id}`, "*ID del Usuario*")
    
    .addField('``🙌🏻`` | Amigos de Roblox: ' + ` ${data.TotalFriends}`, "*Amigos*")
    .addField('``🔋`` | Conectado : ' + ` ${data.Online}`, "*Esta Conectado*")
    .addField("``🥇`` | Insignias :" + "**"+ ` ${data.ListBadges}` + "**", "Estas Son las insignias que tiene")
    .setColor("RANDOM")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp(message.createdAt)
    
    //.addField("Grupos", `${data.Listoup}`, true)
    .setThumbnail(data.Avatar)
    message.channel.send(embed)
 
});
  }