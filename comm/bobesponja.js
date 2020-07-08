exports.run = async (client, message, args) => {
const Discord = require('discord.js')
const Kiz = require('kiz')
 let member = message.mentions.users.first()
 if(!member) return message.channel.send("Menciona a alguien")
let texto = args.join(' ') 
 

var imagen = await Kiz.bob(message.author.displayAvatarURL, member.displayAvatarURL)
var attachment = new Discord.Attachment(imagen, 'bob.png')
 
message.channel.send(attachment)
}