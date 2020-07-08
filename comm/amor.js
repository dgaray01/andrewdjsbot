const Discord = require("discord.js")
exports.run = (client, message, args) => {
let users = message.mentions.users.map(m => m.username).join(' y ');
if(!users) return message.channel.send('Mencione a dos usuarios para calcular');

const random = Math.floor(Math.random() * 100);
let heard = "";

    if(random < 50){
        heard='``💔``';

    }else if(random < 80){
        heard='``💖``';

    }else if(random < 101){
        heard='``❤️``';

    }


const embed = new Discord.RichEmbed()
      .setAuthor("Andrew | Amor", client.user.avatarURL)
      .setDescription("**Mira que tal se llevan en el amor!**")
    .addField('El porcentaje de amor de '+users+' es:',heard+' **'+random+' %**'+' '+heard)
    .setColor("RANDOM")
       .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp(message.createdAt)
    .setThumbnail('https://cdn.discordapp.com/attachments/599821398260711435/599829038936227844/lovecommand.gif')
    .setImage("https://cdn.dribbble.com/users/2070959/screenshots/5881187/copy_2.gif")
    message.channel.send(embed)
 
}