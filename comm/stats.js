 const Discord = require("discord.js");
var uptime = process.uptime();
let cdseconds = 3;

let cpu = Math.round(process.cpuUsage().system)
let cpupercent = Math.round((cpu * 1) / 1000) / 10;

let ram = Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 10) / 10;
let rampercent = Math.round((ram / 512) * 1000) / 10;
const os = require("os");
exports.run = async (client, message) => {

                  
                    const embed = new Discord.RichEmbed()

                        .setAuthor ("Andrew | Estadisticas del bot", client.user.avatarURL)
                        .setDescription("**Mira las Estadisticas del bot de Andrew**")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
                        .addField("``💾`` RAM", "Se está usando " + rampercent + "MB / 1GB")
                        .addField("``📻`` CPU", "Se está usando " + cpupercent + "% / 100%")
                        .addField("``🥏`` Uptime", "El tiempo de mi inicio ha sido de **" + uptime + "** milisegundos")
                        .addField("``📡`` Servidores", "Estoy unido a " + client.guilds.size + " servidores")
                        .addField("``👥`` Usuarios", "Estoy ayudando a " + client.users.size + " usuarios")
                        .addField("``💻`` Sistema",`  ${os.type()} ${os.release()} (${os.arch()})` )   
                       .addField("``🔋`` Node", `${process.version}`+ " **Codigo: asciidoc**")
                        .setImage("https://cdn.dribbble.com/users/510430/screenshots/2030590/cpu---retocar.gif")
                        .setThumbnail(client.user.avatarURL)

                    message.channel.send({ embed });

            }
    
