exports.run = async(client, message, args) => {
    const Discord = require("discord.js");
    const fortnite = require('fortnite');
    //let help = args[1]
    const stats = new fortnite('5bbfafe0-cd9e-4677-ba04-305a7b59c184');
    try {
        let platform = args[0]
        let username = args.slice(1).join(' ')

        var embed = new Discord.RichEmbed()
            .setAuthor("Andrew | Fortnite Ejemplo ", client.user.avatarURL)
            .setColor("RANDOM")
            .setDescription('**' + message.author.username + ' Este Comando te dara las estadisticas de los jugadores! ** ``🎮`` ')
            .addField("Ejempo : ", "jn!fortnite (pc, xbox, ps4) [Nombre del jugador]")
            .setThumbnail("https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3o7btZ0ha3YofVvhx6%2Fgiphy.gif")
            .addField("No te Olvides!", "de poner la plataforma y nombre!")
            .setFooter(message.author.tag, message.author.avatarURL)

        if (!platform) return message.reply(embed)
        var embe = new Discord.RichEmbed()

        .setAuthor("Andrew | Fortnite Ejemplo ", client.user.avatarURL)
            .setColor("RANDOM")
            .setThumbnail("https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3o7btZ0ha3YofVvhx6%2Fgiphy.gif")
            .setDescription('**' + message.author.username + ' Este Comando te dara las estadisticas de los jugadores! ** ``🎮`` ')
            .addField("Ejempo : ", "a!fortnite (pc, xbox, ps4) [Nombre del jugador]")
            .addField("No te Olvides!", "de poner la plataforma y nombre!")
            .setFooter(message.author.tag, message.author.avatarURL)

        if (!username) return message.reply(embe)

        stats.user(username, platform).then(data => {
            if (!data) return message.reply("Usuario no encontrado")

            const cumb = new Discord.RichEmbed()
                .setAuthor("CactusFire | Fortnite Stats", client.user.avatarURL)
                .setDescription("Mira las Estadisticas de juego de los usuarios! ``🎮`` ")
                .setThumbnail("https://nintencity.com/wp-content/uploads/2018/07/fortnite-icon.png")
                .setColor('RANDOM')
                .addField("``💬``| Nick", data.username, true)
                .addField("``🔫``| Asesinatos", data.stats.solo.kills, true)
                .addField("``🧾``| Partidas", data.stats.solo.matches, true)
                .addField("``🥇``| Partidas Ganadas", data.stats.solo.wins, true)
                .addField('``🎰``| Asesinatos por Partida', data.stats.solo.kills_per_match, true)
                .addField('``🎭``| K/D', data.stats.solo.kd, true)
                .addField('``🎯``| Mas Info', data.url, true)
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp(message.createdAt)

            message.channel.send({ embed: cumb });
        })

    } catch (e) {
        // if(!help) return message.channel.send(emb)

        var emb = new Discord.RichEmbed()
            .setAuthor("Andrew | Ejemplo Fortnite", client.user.avatarURL)
            .setDescription("Te Mostraremos un ejemplo para que mires las Stats de los jugadores!")
            .addField("Ejemplo:", "jn!fortnite (pc,xbox,ps4) [Nombre de Usuario]")
            .addField("Plataformas", "pc , xbox , ps4")
            .addField("Porfavor Escriba bien", "El Nombre de Usuario")
            .setColor("RANDOM")
            //**Tienes que Incluir la plataforma: `jn!fortnite [pc, xbox, ps4] <username>`**dDTtw[']

        message.channel.send({ embed: emb });
    }


}