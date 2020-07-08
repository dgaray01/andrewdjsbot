const Discord = require("discord.js")
exports.run = (client, message, args) => {

    var embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Donacion al Bot o web",client.user.avatarURL)
  .setColor("RANDOM")
  .addField("Ayuda de soporte :four_leaf_clover: | Andrew | :maple_leaf:!","[・Compra roles del servidor de Andrew](https://paypal.me/ChikoShidori?locale.x=es_XC)")
  .addField("Servidor de Andrew","[・Servidor de Andrew](https://discord.gg/AS94sFH)")
  .setDescription("**Descripción:** Ayuda a que el bot y la web sigan mejorando y sea estable! y compra asombrosos roles ``💸``")
    .setFooter(message.author.tag, message.author.avatarURL)
  .setTimestamp(message.createdAt)
  .setThumbnail('https://cdn.dribbble.com/users/77545/screenshots/3407618/animation.gif')
        message.channel.send(embed);
}
