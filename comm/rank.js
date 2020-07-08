const pEmbed = require('./../embeds/eProfile.js');
exports.run = (client, message, args, sql, Discord) =>{
    const member = message.guild.member(message.mentions.users.first());

    if(!member){
        sql.get(`SELECT * FROM userScores WHERE guildID = '${message.guild.id}' AND userID = '${message.author.id}'`).then(iUser =>{ //gets user row of whos requesting
            if(!iUser){
                message.reply("Lo siento, no tienes ningún punto. ¡Empieza a chatear para ganarlos!");
            }else{
                pEmbed.profileEmbed(client, message, message.author, iUser, Discord);
            }
        })
    }else{
        sql.get(`SELECT * FROM userScores WHERE guildID = '${message.guild.id}' AND userID = '${member.id}'`).then(iUser =>{
            if(!iUser){
                message.reply("Lo siento, no tienen ningún punto. ¡Haz que empiecen a chatear para ganarlos!");
            }else{
                pEmbed.profileEmbed(client, message, member.user, iUser, Discord);
            }
        })
    }
}