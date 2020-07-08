const superagent = require('superagent')
const Discord = require('discord.js')
exports.run = async (client, message, args, tools) => {
    
    const { body } = await superagent
    .get('https://dog.ceo/api/breeds/image/random');
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Andrew | Perros Aleatorios", client.user.avatarURL)
    .setDescription("** Mira los Perros mas bonitos que hay!** ``🐶``")
    .setImage(body.message)
    .setFooter(message.author.tag, message.author.avatarURL)
  .setTimestamp(message.createdAt)
    
    message.channel.send({embed})
    

}