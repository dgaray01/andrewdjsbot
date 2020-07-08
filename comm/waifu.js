const Discord = require("discord.js")
exports.run = (client, message, args) => {
let user = message.mentions.users.first();  
    let muertes = ["https://i.imgur.com/f1nRqrU.jpg",
                   "https://i.imgur.com/h0uEX7p.jpg",
                   "https://i.imgur.com/O0cuT11.jpg",
                   "https://i.imgur.com/IHNVzlM.jpg",
                   "https://i.imgur.com/eM9fzuf.jpg",
                   "https://i.imgur.com/hRm6Oyd.jpg",
                   "https://i.imgur.com/FqJShfN.jpg",
                   "https://i.imgur.com/fEHqZwI.jpg",
                   "https://i.imgur.com/nNMYSQU.jpg",
                   "https://i.imgur.com/XITkpT8.jpg",
                   "https://i.imgur.com/TZhYybC.jpg",
                   "https://i.imgur.com/S6sRqc8.png",
                   "https://i.imgur.com/6NGPxmH.jpg",
                   "https://i.imgur.com/OuVcTi5.jpg",
                   "https://i.imgur.com/kJ7XuhF.jpg",
                   "https://i.imgur.com/yAvtGNH.jpg",
                   "https://i.imgur.com/aJ9qZk3.jpg",
                   "https://i.imgur.com/ZafZNdQ.png",
                   "https://i.imgur.com/wrJGHl9.jpg",
                   "https://i.imgur.com/XIL9xys.jpg",
                   "https://i.imgur.com/ul8XQRK.jpg",
                   "https://i.imgur.com/5qb9z0D.jpg",
                   "https://i.imgur.com/3SNfEgP.jpg",
                   "https://i.imgur.com/R5bTqC5.jpg",
                   "https://i.imgur.com/g8bMdgj.png",
                   "https://i.imgur.com/sjhZAAq.jpg",
                   "https://i.imgur.com/hNCNK6j.jpg",
                   "https://i.imgur.com/TqfEOR4.jpg",
                   "https://i.imgur.com/F9xqy8l.jpg",
                   "https://i.imgur.com/jdMJY6Q.jpg",
                   "https://i.imgur.com/U1hWypu.jpg",
                  "https://i.imgur.com/kKkIXn6.jpg",
                  "https://i.imgur.com/EWUURot.jpg",
                  "https://i.imgur.com/rMaTRUm.jpg",
                  "https://i.imgur.com/yWlfUnN.jpg",
                  "https://i.imgur.com/PxTAOzF.jpg",  
                  "https://i.imgur.com/BHwXsf5.jpg",
                  "https://i.imgur.com/UKoym9k.jpg",
                  "https://i.imgur.com/MHzBUIv.gif",
                  "https://i.imgur.com/8sP93W8.jpg",
                  "https://i.imgur.com/s6DaE8I.jpg",
                  "https://i.imgur.com/yCGvZqL.jpg",
                  "https://i.imgur.com/UuqDhrA.jpg",
                  "https://i.imgur.com/D4xRnsT.jpg",
                  "https://i.imgur.com/fVDxaZB.png",
                  "https://i.imgur.com/8wyV9sm.png",
                  "https://i.imgur.com/dpOmfh9.png",
                  "https://i.imgur.com/ZrBnRca.jpg",
                  "https://i.imgur.com/yRwVApb.png",
                  "https://i.imgur.com/YhKYkUO.jpg",
                  "https://i.imgur.com/vLOUavB.png",
                  "https://i.imgur.com/xH1Ts6n.png",
                  "https://i.imgur.com/sxoVZ2l.png",
                  "https://i.imgur.com/5IwvKbl.jpg",
                  "https://i.imgur.com/kRivzdY.jpg",
                  "https://i.imgur.com/VCT1Bbi.jpg"]
    var embed = new Discord.RichEmbed()
.setAuthor("Andrew · Waifus Aleatorias", "https://i.imgur.com/Z1GyAQT.png")
.setDescription("**Descripción:** Mira las waifus más Kawaiis que existen")
.setColor("RANDOM")
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
.setImage(muertes[Math.floor(Math.random() * muertes.length)])
   message.channel.send(embed).then(msg => {
        msg.react("👍").then(r => msg.react("👎"))
    });
}
    