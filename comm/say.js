const Discord = require("discord.js")
exports.run = (client, message, args) => {
  
  let mensaje = args.join(" ")
if(!mensaje) return message.channel.send(`Escribe contenido a decir ${message.author}!`);
message.channel.send(mensaje);
  message.delete()

            }