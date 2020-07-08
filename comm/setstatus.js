const Discord = require("discord.js")
const db = require("quick.db")
exports.run = (client, message, args) => {
  
const status = args.join(" ")

if(!status) return message.reply("``❌`` Tienes que poner un estado.")

  
  db.set(`status_${message.author.id}`, status)
  
  const embed = new Discord.RichEmbed()
  .setTitle("Andrew | Cambio de estado")
  .setColor("GREEN")
  .addField("Nuevo estado:", status)
  message.channel.send(embed)
            }