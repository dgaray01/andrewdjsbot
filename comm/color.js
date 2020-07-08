const marsnpm = require("marsnpm");
const Discord = require('discord.js')

exports.run = async(client, message, args) => {

    let color2 = args.slice(0).join(' ')
    let texto = args.join(" ");
    
    try {
        let img = await marsnpm.color(color2)

        let embed = new Discord.RichEmbed()
            .setAuthor("Andrew | Color", client.user.avatarURL)
            .setDescription("Aca esta la imagen al color que escribiste (Nombre de Color en Ingles!) ``💨``")
            .attachFiles([{
                attachment: img,
                name: "color.png"
            }])
            .setColor("RANDOM")
            .setImage("attachment://color.png")
            .setFooter(message.author.tag, message.author.avatarURL)
            .setTimestamp(message.createdAt)

        message.channel.send(embed)
    } catch (error) {
        error => console.log(error);
        
        let embud = new Discord.RichEmbed()
            .setAuthor("Andrew | Color Ejemplo", client.user.avatarURL)
            .setDescription("Debes Escribir el color que quieres y te mandamos una imagen de ese color ( Los nombres de los colores debe ser en Ingles)``💨``")
            .addField("Ejemplo : ", "**a!color (Nombre de Color)**")
            .setColor("RANDOM")
            .setThumbnail("https://cdn.discordapp.com/avatars/597957157509398539/e15135decdfb13e17187489bb3f3420d.png?size=2048")
      
        message.channel.send(embud)
    }
}
