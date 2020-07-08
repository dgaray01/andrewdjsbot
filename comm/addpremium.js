const Discord = require("discord.js")
const db = require("quick.db")
exports.run = (client, msg, args) => {
  
if(msg.author.id !== "460314183859175434") return msg.reply("No tienes permiso.")
     let user = msg.mentions.users.first()
     if(!user) return msg.reply("Menciona a un usuario.")
    
    db.set(`premiun_${user.id}`, "yes")
    msg.channel.send(`Se ha agregado premiun a ${user.username}`)
  }