const http = require('http');
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const { Strategy } = require("passport-discord");
const passport = require("passport");
const bodyparser = require("body-parser");
const session = require("express-session");

app.set("port", process.env.PORT)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const Discord = require("discord.js");
var Weez = require("weez");
const client = new Discord.Client();

var DiscordStrategy = require('passport-discord').Strategy;


// SERVIDOR WEB
passport.serializeUser((user, done) => {
  done(null, user);
  
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
  
});

let scopes = ["identify", "guilds"];

passport.use(new Strategy({
  clientID: "599441108468236298",
  clientSecret: "4axJVDoZlh2zTrAfYFnIzovmQYHT65zB",
  callbackURL: `https://andrewdjs.glitch.me/login`,
  scope: scopes
}, function(accessToken, refreshToken, profile, done){
  process.nextTick(function() {
    return done(null, profile);
  });
}));

app
.use(bodyparser.json())
.use(bodyparser.urlencoded({ extended: true }))
.engine("html", require("ejs").renderFile)
.use(express.static(path.join(__dirname, "/public")))
.set("view engine", "ejs")
.set("views", path.join(__dirname, "views"))
.set('port', process.env.PORT || 3000)
.use(session({
  secret: "mydash",
  resave: false,
  saveUninitialized: false
}))
.use(passport.initialize())
.use(passport.session())
.use(function(req,res,next){
  req.bot = client;
  req.db = db; //aqui estamos creado una base para poder utilizar en las rutas
  next();
})


//middkewares esto es para ver que acciones se toman en nuestra web ;)
app.use(morgan("dev"));

//rutas
app.use(require("./routes"));
app.use("/", require("./routes/index"))
app.use("/bot", require("./routes/bot"))
app.use("/server", require("./routes/server"))
app.use("/error404", require("./routes/error404"))
app.use("/perfil", require("./routes/perfil"))
app.use("/file1", require("./routes/file1"))
app.use("/dblauncher", require("./routes/dblauncher"))






//vamos a poner una carpeta publica o estatica para el navegador la llamare public


app.get("*", function(req, res) {
  res.redirect("/error404")
});


app.listen(app.get('port'), function() {
  console.log('Listo en el puerto ' + app.get('port'));
});

process.on("unhandledRejection", (r) => {
  console.dir(r);
});



//BOT




var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
const fs = require("fs");
const Idiot = require("idiotic-api");
client.API = new Idiot.Client("o5w3W99vRDOO7eEcXapd", { dev: true });
const db = require ('megadb')







//
//            _                    
//           | |    ___   __ _ ___ 
//           | |   / _ \ / _` / __|
//           | |__| (_) | (_| \__ \
//           |_____\___/ \__, |___/
//                        |___/     
//     

client.on('ready', () => {

    console.log("[Sistema] Cargando los comandos principales...")
    console.log(" ")
    console.log("[Sistema] Cargando el módulo de información...")
    console.log("[Sistema] Cargando el módulo de social...")
    console.log("[Sistema] Cargando el módulo de anime...")
    console.log("[Sistema] Cargando el módulo de diversión...")
    console.log("[Sistema] Cargando el módulo de moderación...")
    console.log("[Sistema] Cargando el módulo de variedad...")

})

client.on('ready', () => {

    console.log(" ")
    console.log("[Sistema] Cargando la identidad " + client.user.tag)
    console.log(" ")
    console.log('[Sistema] Cargando información sobre los servidores...');
    console.log(" ")
    console.log(" Servidores de Discord:")
    client.guilds.forEach((guild) => {
        console.log("   · " + guild.name + "| ID: " + guild.id + "| Dueño: " + guild.owner.id)
    })

})


  


//╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱┃┃
//┃┃╱╰╋━━┳━━┳━━┳━━╮╭━╯┣━━╮╭━━┳╮┣╮╭╋━━┳━━┳━━┳╮╭┫╰━┳┳━━╮
//┃┃╱╭┫╭╮┃━━┫╭╮┃━━┫┃╭╮┃┃━┫┃╭╮┃┃┃┃┃┃╭╮┃╭━┫╭╮┃╰╯┃╭╮┣┫╭╮┃
//┃╰━╯┃╰╯┣━━┃╭╮┣━━┃┃╰╯┃┃━┫┃╭╮┃╰╯┃╰┫╰╯┃╰━┫╭╮┃┃┃┃╰╯┃┃╰╯┃
//╰━━━┻━━┻━━┻╯╰┻━━╯╰━━┻━━╯╰╯╰┻━━┻━┻━━┻━━┻╯╰┻┻┻┻━━┻┻━━╯

const actividades = [
    "🔧 a!help to see commands",
    "🏯 ┊ AndrewBot",
    "📟 a!invite ┊ Invitame a tu servidor",
    `💻 ┊ Servers: ${client.guilds.size} ┊ Usuarios: ${client.users.size}  `,
];



client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (actividades.length - 1) + 1);
        client.user.setPresence({
            status: "online",
            game: {
                name: actividades[index],
                type: "STREAMING",
                url: 'https://www.twitch.tv/ninja'

            }
        })

    }, 3000 );
  
  
  
  
    
  
  
});

/*function changeNameFunction() {
    let canal = client.channels.get("567306607109603338"); // <===
    let anuncios = ["🌐 ┊ japonnow.me ┊ 🌐", "🔧 ┊ j!help  jn!help ┊ 🔧", "🐥 ┊ @japon_now ┊ 🐥", "📷 ┊ @japon_now ┊ 📷", "🎈 ┊ Anuncios 24/7┊ 🎈", "📥 ┊ jn!invite ┊ 📥"]
    let anuncioRandom = anuncios[Math.floor(Math.random() * (anuncios.length - 0 + 1) + 0)]
    canal.setName(anuncioRandom)
}

setInterval(changeNameFunction, 10000); */


//╭━━━╮╱╱╱╱╱╱╱╱╭╮╭━━━╮╱╱╭╮
//┃╭━╮┃╱╱╱╱╱╱╱╭╯╰┫╭━╮┃╱╱┃┃
//┃╰━╯┣━━┳━━┳━┻╮╭┫╰━╯┣━━┫┃╭━━╮
//┃╭╮╭┫┃━┫╭╮┃╭━┫┃┃╭╮╭┫╭╮┃┃┃┃━┫
//┃┃┃╰┫┃━┫╭╮┃╰━┫╰┫┃┃╰┫╰╯┃╰┫┃━┫
//╰╯╰━┻━━┻╯╰┻━━┻━┻╯╰━┻━━┻━┻━━╯

client.on('raw', packet => {
    if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
    const channel = client.channels.get(packet.d.channel_id);
    if (channel.messages.has(packet.d.message_id)) return;
    channel.fetchMessage(packet.d.message_id).then(message => {
        const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
        const reaction = message.reactions.get(emoji);
        if (reaction) reaction.users.set(packet.d.user_id, client.users.get(packet.d.user_id));
        if (packet.t === 'MESSAGE_REACTION_ADD') {
            client.emit('messageReactionAdd', reaction, client.users.get(packet.d.user_id));
        }
        if (packet.t === 'MESSAGE_REACTION_REMOVE') {
            client.emit('messageReactionRemove', reaction, client.users.get(packet.d.user_id));
        }
    });
});

const mensajes = {
    // "578558645588066309":"56730649572592844",
    //  "ID Del Msg": "ID Del rol"


}

client.on('messageReactionAdd', (reaction, user) => {
    if (!mensajes.hasOwnProperty(reaction.message.id)) return;
    let role = reaction.message.guild.roles.get(mensajes[reaction.message.id])
    reaction.message.guild.members.get(user.id).addRole(role);
});

client.on('messageReactionRemove', (reaction, user) => {
    if (!mensajes.hasOwnProperty(reaction.message.id)) return;
    let role = reaction.message.guild.roles.get(mensajes[reaction.message.id])
    reaction.message.guild.members.get(user.id).removeRole(role);
});

//LOGS

const logsDB = new db.crearDB("logs");

client.on("messageUpdate", async (oldMessage, newMessage) => {
  
    if (!logsDB.tiene(oldMessage.guild.id)) return;
        
    const guildLogChannelId = await logsDB.obtener(oldMessage.guild.id)
    
    const guildLogChannel = client.channels.get(guildLogChannelId)
  
    if (oldMessage.content === newMessage.content || !oldMessage.content || !newMessage.content) return;

    const embed = new Discord.RichEmbed()

        .setColor('#FF008B')
        .addField("**Mensaje Editado Por:**", oldMessage.author, true)
        .addField("💱**Canal**", oldMessage.channel, true)
        .addField("**Contenido Del Mensaje**", oldMessage.content, true)
        .addField("**Contenido Del Mensaje Editado**", newMessage.content, true)
        .setThumbnail(oldMessage.author.avatarURL)
        .setTimestamp();

    guildLogChannel.send(embed)
});
client.on("messageDelete", async (message) => {
if (!logsDB.tiene(message.guild.id)) return;
        
    const guildLogChannelId = await logsDB.obtener(message.guild.id)
    
    const guildLogChannel = client.channels.get(guildLogChannelId)
    
    if (!guildLogChannel) return;
    
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("**"+message.author.username+"** eliminó un `mensaje` con el siguiente contenido: `"+message.content+"`");
    guildLogChannel.send(embed);
});


//╭━━━╮╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃╭━╮┃╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮
//┃┃╱┃┣━━┳━┳━━┳━╯┣━━┳━━┳┳╮╭┳┳━━┳━╋╮╭╋━━┳━━╮
//┃╰━╯┃╭╮┃╭┫╭╮┃╭╮┃┃━┫╭━╋┫╰╯┣┫┃━┫╭╮┫┃┃╭╮┃━━┫
//┃╭━╮┃╰╯┃┃┃╭╮┃╰╯┃┃━┫╰━┫┃┃┃┃┃┃━┫┃┃┃╰┫╰╯┣━━┃
//╰╯╱╰┻━╮┣╯╰╯╰┻━━┻━━┻━━┻┻┻┻┻┻━━┻╯╰┻━┻━━┻━━╯
//╱╱╱╱╭━╯┃
//╱╱╱╱╰━━╯


client.on('guildCreate', guild => {
  const logs = client.channels.get("695696067009708163")
    let SendChannel = guild.channels.filter(x => x.type === "text").random()

    const embed = new Discord.RichEmbed()

    .setTitle("¡Gracias por añadirme a este servidor Discord tan hermoso!")
        .setAuthor("Andrew · Agradecimiento", client.user.avatarURL)
        .setDescription("**Gracias por agregarme a este servidor hare todo lo posible para seguir su diversion!**")
        .setColor("RANDOM")
        .setFooter("Andrew Bot", client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .addField("¿Quieres agreagar Andrew a tu servidor? ``🤩``", "[-Click Aca-](https://discordapp.com/oauth2/authorize?client_id=599441108468236298&permissions=269494300&scope=bot)")
        .addField("Web ``☄️``", "[・Web](https://andrewdjs.glitch.me")
        .setImage("https://cdn.dribbble.com/users/1029769/screenshots/3430845/hypeguy_dribbble.gif")
    SendChannel.send(embed)
  logs.send(`Me han agregado en el servidor ${guild.name}`)
});



//╭━━┳━╮╭━┳━━━╮╭━━━┳━━━╮
//╰┫┣┫┃╰╯┃┃╭━╮┃╰╮╭╮┃╭━━╯
//╱┃┃┃╭╮╭╮┃┃╱╰╯╱┃┃┃┃╰━━╮
//╱┃┃┃┃┃┃┃┃┃╭━╮╱┃┃┃┃╭━━╯
//╭┫┣┫┃┃┃┃┃╰┻━┃╭╯╰╯┃╰━━╮
//╰━━┻╯╰╯╰┻━━━╯╰━━━┻━━━╯
//╭━━╮╭━━┳━━━┳━╮╱╭┳╮╱╱╭┳━━━┳━╮╱╭┳━━┳━━━┳━━━╮
//┃╭╮┃╰┫┣┫╭━━┫┃╰╮┃┃╰╮╭╯┃╭━━┫┃╰╮┃┣┫┣┻╮╭╮┃╭━╮┃
//┃╰╯╰╮┃┃┃╰━━┫╭╮╰╯┣╮┃┃╭┫╰━━┫╭╮╰╯┃┃┃╱┃┃┃┃┃╱┃┃
//┃╭━╮┃┃┃┃╭━━┫┃╰╮┃┃┃╰╯┃┃╭━━┫┃╰╮┃┃┃┃╱┃┃┃┃╰━╯┃
//┃╰━╯┣┫┣┫╰━━┫┃╱┃┃┃╰╮╭╯┃╰━━┫┃╱┃┃┣┫┣┳╯╰╯┃╭━╮┃
//╰━━━┻━━┻━━━┻╯╱╰━╯╱╰╯╱╰━━━┻╯╱╰━┻━━┻━━━┻╯╱╰╯

client.on('guildMemberAdd', async(member) => {

    let bienvenida = new Weez.Bienvenida()
        .avatar(member.user.displayAvatarURL)
        .fondo("https://i.imgur.com/VC9cnvk.png")
        .textoTitulo(`Bienvenido ${member.user.username} a ${member.guild.name}`)
        .textoDesc("¡Eres el Habitante " + member.guild.memberCount + " de este server")
        .textoColor('e7e7e7')
        .acceso(weez)
    let hi = await Weez.bienvenidaRender(bienvenida)
    let embed = new Discord.RichEmbed()
        .setAuthor("| Hola " + member.user.username + "! ", "https://imgur.com/1phCTGd.gif")
        .addField("Bienvenid@ a:", `Armetrix Network`)
        .addField("Quieres Evitar Sanciones?", "Por favor sigue las reglas")
        .attachFiles([{
            attachment: hi,
            name: "hi.png"
        }])
        .setColor("36393E")
        .setImage("attachment://hi.png")
//no tocar

    member.guild.channels.get('705520631529209856').send(embed).catch()
});

client.on('guildMemberRemove', async(member) => {

    let despedida = new Weez.Bienvenida()
        .avatar(member.user.displayAvatarURL)
        .fondo("https://i.imgur.com/VC9cnvk.png")
        .textoTitulo(`Adios ${member.user.username} vuelve pronto!`)
        .textoDesc("¡Sin ti somos " + member.guild.memberCount + "Habitantes!")
        .textoColor('e7e7e7')
        .acceso(weez)

    let bye = await Weez.bienvenidaRender(despedida)
    let embed = new Discord.RichEmbed()
        .setAuthor("| Adios " + member.user.username + "! ", "https://imgur.com/5IO8iFx.gif")
        .addField("Vuelve Pronto te esperamos en", `${member.guild.name}`)
        .attachFiles([{
            attachment: bye,
            name: "bye.png"
        }])
        .setColor("36393E")
        .setImage("attachment://bye.png")
        member.guild.channels.get('706960027776450580').send(embed);
});







//╭━╮╭━┳╮╱╭┳━━━┳━━┳━━━┳━━━╮
//┃┃╰╯┃┃┃╱┃┃╭━╮┣┫┣┫╭━╮┃╭━╮┃
//┃╭╮╭╮┃┃╱┃┃╰━━╮┃┃┃┃╱╰┫┃╱┃┃
//┃┃┃┃┃┃┃╱┃┣━━╮┃┃┃┃┃╱╭┫╰━╯┃
//┃┃┃┃┃┃╰━╯┃╰━╯┣┫┣┫╰━╯┃╭━╮┃
//╰╯╰╯╰┻━━━┻━━━┻━━┻━━━┻╯╱╰╯

const ytdl = require('ytdl-core')
const Util = require('discord.js');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyCnj7eHqEVwsVI1OGW0nxFsgAEAJHV-68k");
var opus = require('opusscript');
const qdb = require("quick.db")
const queue = new Map();

client.on('message', async msg => {
            const db = require('megadb');
            let prefix_db = new db.crearDB("prefixes")
                // let prefix = process.env.PREFIX;

            let prefix;
            if (prefix_db.tiene(`${msg.guild.id}`)) {
                prefix = await prefix_db.obtener(`${msg.guild.id}`)
            } else {
                prefix = "a!"
            }

            if (!msg.guild) return;
            if (msg.author.bot) return;
            if (!msg.content.startsWith(prefix)) return;





            const args = msg.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();

            const searchString = args.slice(1).join(' ');
            const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
            const serverQueue = queue.get(msg.guild.id);


    /*
  
     if(command === "invites"){
    msg.guild.fetchInvites().then(invs => {
      let user = msg.mentions.users.first() || msg.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
msg.channel.send(`${user} **tiene ${inviteCount} invitaciones.**`);
});
  }
  
  */
  

            if (command === 'play') {

                const voiceChannel = msg.member.voiceChannel;
                if (!voiceChannel) return msg.reply('📶 | tienes que estar dentro de un **Canal de Voz** para poder reproducir música ``🎶`` ');

                const permissions = voiceChannel.permissionsFor(msg.client.user);

                if (!permissions.has('CONNECT')) {
                    return msg.channel.send("🔇  | Lo siento **" + msg.author.tag + "** pero no puedo dejarte usar este comando debido a que no tengo permisos para entrar en ese canal de voz 🚷");
                }

                if (!permissions.has('SPEAK')) {
                    return msg.channel.send("🔇  | Lo siento **" + msg.author.tag + "** pero no puedo dejarte usar este comando debido a que no tengo permisos para hablar en ese canal de voz 🚷");
                }

                if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                    const playlist = await youtube.getPlaylist(url);
                    const videos = await playlist.getVideos();
                    for (const video of Object.values(videos)) {
                        const video2 = await youtube.getVideoByID(video.id);
                        await handleVideo(video2, msg, voiceChannel, true);
                    }
                    return msg.reply('📜 ahora estoy reproduciendo la "PlayList": **' + playlist.title + '** te gusta?')
                } else {
                    try {
                        var video = await youtube.getVideo(url);
                    } catch (error) {
                        try {
                            var videos = await youtube.searchVideos(searchString, 10);
                            let index = 0;
                            msg.channel.send(`**Canciones Encontradas:**
    ${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
    :warning: Por favor escribe un número del **1** al **10** según la canción que quieras reproducir.
					`);
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						return msg.reply('``❎`` no has introducido un número y la acción se ha cancelado! 🔢');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					return msg.reply('``❓`` ¿seguro que lo has escrito bien? ¡No encuentro ningún resultado! ``🔍``');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
    //--------------------------------------
	} else if (command === 'skip') {
		if (!msg.member.voiceChannel) return msg.reply('``🚫`` no te encuentras en ningún Canal de Voz! 🔊');
		if (!serverQueue) return msg.reply('``💢`` no hay nada reproduciendose en estos momentos.. ');
		serverQueue.connection.dispatcher.end();
		return undefined;
	} else if (command === 'stop') {
		if (!msg.member.voiceChannel) return msg.reply('``🚫`` no te encuentras en ningún Canal de Voz! 🔊');
		if (!serverQueue) return msg.reply('``💢`` no hay nada reproduciendose en estos momentos..');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
		return undefined;
	} else if (command === 'volume') {
    
		if (!msg.member.voiceChannel) return msg.reply('``🚫`` no te encuentras en ningún Canal de Voz! 🔊');
		if (!serverQueue) return msg.reply('``💢`` no hay nada reproduciendose en estos momentos..');
		if (!args[0]) return msg.channel.send(`**${serverQueue.volume}** :loud_sound:`);
		serverQueue.volume = args[0];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    
		return msg.reply(`has cambiado el volumen a **${args[1]}**`);
	} else if (command === 'playing') {
		if (!serverQueue) return msg.reply('``💢`` no hay nada reproduciendose en estos momentos.. ');
		return msg.channel.send('**Reproduciendo Ahora: **' + serverQueue.songs[0].title + '**' + msg.author.tag + '** Te gusta la musica? ``🎶``')
		} else if (command === 'queue') {
		if (!serverQueue) return msg.reply('``💢`` no hay nada reproduciendose en estos momentos..');
    const embed = new Discord.RichEmbed()
    .setTitle("Lista de Reproducción")
    .setDescription(`${serverQueue.songs.map(song => `**·** ${song.title}`).join('\n')}\n\n**Reproduciendo Ahora:** ${serverQueue.songs[0].title}`)
		return msg.channel.send({embed});
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.reply('⏸ has pausado la reproducción de la música ``🎵``');
		}
		return msg.reply('``💢`` no hay nada reproduciendose en estos momentos.. ');
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.reply('▶️ has resumido la reproducción pausada ``🎵``');
		}
	  return msg.reply('⏸ has pausado la reproducción de la música ``🎵``');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			queue.delete(msg.guild.id);
			return msg.reply(` ``🔕`` no puedo acceder a ese Canal de Voz por la siguiente razón!: \n \n${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		if (playlist) return undefined;
		else return msg.reply(`➕ has añadido a la lista de reproducción la canción **${song.title}** Disfruta la musica! ``🎶`` `);
	}  
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send('**Reproduciendo Ahora: **' + song.title + '** Disfruta tu musica!')
}







//╭━━╮╱╱╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╭╮╱╱╭╮
//┃╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱┃┃╱╭╯╰╮
//┃╰╯╰┳━━┳━━┳━━╮╭━╯┣━━╮╭━╯┣━┻╮╭╋━━┳━━╮
//┃╭━╮┃╭╮┃━━┫┃━┫┃╭╮┃┃━┫┃╭╮┃╭╮┃┃┃╭╮┃━━┫
//┃╰━╯┃╭╮┣━━┃┃━┫┃╰╯┃┃━┫┃╰╯┃╭╮┃╰┫╰╯┣━━┃
//╰━━━┻╯╰┻━━┻━━╯╰━━┻━━╯╰━━┻╯╰┻━┻━━┻━━╯ 

          
client.on('message', async (message) => {
  
  const db = require('megadb');
  let prefix_db = new db.crearDB("prefixes")
   // let prefix = process.env.PREFIX;

  let prefix;
    if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)  
    }else{
      prefix = "a!"
    }

  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
    
  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(message.content === '<@599441108468236298>') {
    message.channel.send(`Mi prefijo actual es ${prefix}`)
  }
  
  
//╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮╭╮╱╭╮╱╱╱╱╱╱╱╭┳╮
//┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃┃┃╱┃┃╱╱╱╱╱╱╱┃┃┃
//┃┃╱╰╋━━┳╮╭┳╮╭┳━━┳━╮╭━╯┃┃╰━╯┣━━┳━╮╭━╯┃┃╭━━┳━╮
//┃┃╱╭┫╭╮┃╰╯┃╰╯┃╭╮┃╭╮┫╭╮┃┃╭━╮┃╭╮┃╭╮┫╭╮┃┃┃┃━┫╭╯
//┃╰━╯┃╰╯┃┃┃┃┃┃┃╭╮┃┃┃┃╰╯┃┃┃╱┃┃╭╮┃┃┃┃╰╯┃╰┫┃━┫┃
//╰━━━┻━━┻┻┻┻┻┻┻╯╰┻╯╰┻━━╯╰╯╱╰┻╯╰┻╯╰┻━━┻━┻━━┻╯

  

  try {
    let comando = require("./comm/" + command + ".js");
    comando.run(client, message, args);
    
  }catch (err){
    const embed = new Discord.RichEmbed()
    .setAuthor ("Andrew | Error",client.user.avatarURL)
      .setImage("https://i.imgur.com/wv1FsLZ.gif")
    .setColor ("36393E")
      .setDescription("**El Comando que usted ingreso esta mal o no existe** ``🤖 ``")
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp(message.createdAt)
   return message.reply(embed)
  }
});

client.login("");