const Discord = require("discord.js")
exports.run = (client, message, args) => {

    var embed = new Discord.RichEmbed()
  .setAuthor("Andrew · Aviso Boost",client.user.avatarURL)
  .setDescription("**Hola hola @everyone vengo a pedirles a todos los usuarios nitro de esta bella comunidad su apoyo. Vengan y denle en Nitro Boost!**")
    .addField("Lo que tienen que hacer es lo siguiente. Nadamas denle click derecho al servidor y darle en el botón correspondiente."+"                            ¡Y listo! Con su apoyo verán cosas muuuy wais en el server así cómo ganarse privilegios ustedes cómo:","algunos que les mostrare aca ``⬇️``")

  .addField("Numero ``1️⃣``","-Rol Exclusivo para estar por arriba de los usuarios normales.")
  .addField("Numero ``2️⃣``","-Canal de Voz o Chat único.")
  .addField("Numero ``3️⃣``","-Un Emoji a su elección.")
  .addField("Numero ``4️⃣``","-Mas cosas en el futuro depende del apoyo que nos den.")
  .addField("Disfruten su día a todos.","``Nota: actualmente está en curso y está sujeto a cambios     (o incluso a su eliminación). Esta característica se encuentra actualmente en vivo en ciertos servidores     (al azar, 3% de los servidores).Entonces cuando esté disponible, ya saben qué hacer ;-;``")
  .setThumbnail("https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif")
  .setColor("RANDOM")

    .setFooter("Server Boost", "https://cdn.vox-cdn.com/thumbor/iSLVr3G4KTkdY5dvX12mE7kgXeQ=/0x0:800x800/1200x800/filters:focal(350x325:478x453):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/58796253/TeamLiquid_socialmedia__1_.0.gif")
  .setTimestamp(message.createdAt)

        message.channel.send(embed);
}