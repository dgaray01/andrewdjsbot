const Discord = require("discord.js")
const db = require("quick.db")
exports.run = async (client, message, args) => {
 let users = message.mentions.users.first()

const cooldown = await db.fetch(`${message.author.id}_following_${users.id}`)

if(message.author.id === users.id) return message.reply("No puedes seguirte a ti mismo.")

if(cooldown === "Yes")return message.reply("Ya estas siguiendo a este usuario.")
 
if(!users) return message.reply("Menciona a un usuario.")  
  db.set(`${message.author.id}_following_${users.id}`, "Yes")
  db.add(`followers_${users.id}`, 1)
  db.add(`${message.author.id}_followings`, 1)
  
  const embed = new Discord.RichEmbed()
  .setTitle("Andrew | Follow")
  .setColor("GREEN")
  .addField("Siguiendo a: ", users.username)
  message.channel.send(embed)
            }