const Discord = require("discord.js")
exports.run = (client, message, args) => {
let user = message.mentions.users.first();  
    let muertes = ["https://cdn.discordapp.com/attachments/435676959855345664/566021298124357650/Anime-FateGrand-order-Fate-series-Jeanne-Alter-3915162.jpeg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/566257707636621333/1203b9de042bbd1d90e7d9958b875329.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/566257840885334055/8a64efb92a164bc52cfc4a3b54174e8a.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/566258065955880960/8e17b41c1344094c37a7a7dbd29bfced.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565598026786275367/miku_1.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565402264462688259/image0.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565402300382707712/image0.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565402159823454219/image0.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565401173083947018/image0.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565401103735455754/image0.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565161531180974091/Mashiro-tan_1.gif",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565095785302327296/D3TekMvUwAINWQ3.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565080821283815434/DyZ7o2NU8AEEu38.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565080780989005854/DyZilrZU8AAEVYv.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565072996268769280/DzLFquOUUAAJqBV.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565072675253518346/Dz68SmUUYAAl1-1.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565071552522223627/D1wZS3xU4AI-W_k.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565048908338954241/image0.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565048834569273385/image0.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565048555035820032/image0.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565044407657693185/image0.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/565044395620040704/image0.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/564894209199308821/6.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/564654924089131036/image0.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/564546416714973184/2.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/564546051508273184/1.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/564535956439433217/image0.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/564535943919304714/image0.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/564517830637125652/B1S1I87vZ.gif",
                   "https://cdn.discordapp.com/attachments/435676959855345664/564507036931325958/3.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/564312795886256140/image0.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/563982725254479898/sub.jpg",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563982497143324677/03_01_39.176_giphy_1.gif",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563932040987410453/Screenshot_20190405-2242492.png",
                  "hhttps://cdn.discordapp.com/attachments/435676959855345664/563753544059060254/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563753530142228510/image0.png",  
                  "https://cdn.discordapp.com/attachments/435676959855345664/563753514430365727/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563753491806289961/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563753472311164938/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563753379759652884/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563746832241524736/IMG-000-0398.jpg",
                  "https://images-ext-1.discordapp.net/external/qnJ_ssUi5cuqHOTk80_K7MzWAI28_8KwANyeldad104/https/cdn.weeb.sh/images/H1jnI1KPZ.gif",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563494143284740099/image0.jpg",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563485908649902091/918.jpg",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563480093247406086/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563480127774654620/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563480083919273999/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563480063388024832/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563479890494619672/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563473903993880597/image0.jpg",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563438439710588934/illust_72928682_20190323_122117.jpg",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563438435788914693/illust_72059591_20190323_122110.jpg",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563240521439641630/image0.jpg",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563240430574239766/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/563049424725475328/e6bb8af7bfcb47e639d4e5c09f58a040.gif",
                   "https://cdn.discordapp.com/attachments/435676959855345664/561991764315996171/1531037240_Lolhentaifaceamiritesolewdandfunnyguaranteedreplies_a99ba083e184479b6e0b212b8e6259bd.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/561272223411994624/11586367e6aa78d08bc8d827b61e4afe.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/561143876341989377/image0.jpg",
                   "https://media.discordapp.net/attachments/435676959855345664/561046379104043008/image0.jpg?width=391&height=522",
                   "https://cdn.discordapp.com/attachments/435676959855345664/560993611760664644/pat.gif",
                   "https://cdn.discordapp.com/attachments/435676959855345664/560993316368547840/tenor.gif",
                   "https://cdn.discordapp.com/attachments/435676959855345664/560895335858307072/66595813_p0.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/560895334939623434/54497702_p0.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/560895333262163980/52188749_p0.png",
                   "https://cdn.discordapp.com/attachments/435676959855345664/560894985151447045/illust_68034282_20190202_154345.jpg",
                   "https://cdn.discordapp.com/attachments/435676959855345664/559955944944041984/60695292_p0_master1200.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/559955882851434496/60695292_p1_master1200.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/559953952901169154/58211977_p0_master1200.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/559954136624398348/58294839_p0_master1200.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/559783972251369473/image0.png",  
                  "https://cdn.discordapp.com/attachments/435676959855345664/559783998164041729/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/559783859013550092/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/559085549789642793/FB_IMG_15530891587265632.jpg",
                  "https://cdn.discordapp.com/attachments/435676959855345664/558745995576344603/Yoshino.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/557813323173986305/28.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/557299133258661908/image0.jpg",
                  "https://cdn.discordapp.com/attachments/435676959855345664/556830977809448970/illust_73189154_20190317_082627.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/555108754933284874/36c8518f-a105-4b1a-bcf9-882aa769646d.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/554865097617571840/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/554817182580605027/unknown.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/554699391219531776/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/554160663170383880/image0.jpg",
                  "https://cdn.discordapp.com/attachments/435676959855345664/554019837848977412/34824d4894fbbc5261d7ecd07e1b0b63.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/554016959008735262/Valentine-Nico-love-live-school-idol-project-38202664-600-476.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/554016692490076161/Love.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/554016774295650315/e086c77a9a56d51cdb3ce51739aad8f09c1f46ab_hq.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/553994295816880141/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/553994286606188584/image0.png",
                  "https://cdn.discordapp.com/attachments/435676959855345664/552565794865676297/bfeca536a4feeb17dcaff05bb03a7f0b.gif",
                  "https://cdn.discordapp.com/attachments/435676959855345664/552561324068962336/db06c672458b9d109e0850ad5bb1539e.jpg"]
    var embed = new Discord.RichEmbed()
.setAuthor("Andrew | Cosas Kawaii Aleatorias", client.user.avatarURL)
.setDescription("**Mira las cosas más Kawaiis que existen** ``💓``")
.setColor("RANDOM")
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
.setImage(muertes[Math.floor(Math.random() * muertes.length)])
   message.channel.send(embed).then(msg => {
        //msg.react("💓").then(r => msg.react("💔"))
     const emoji1 = '💓'
    const emoji = '💔'
    message.channel.send('Si le das al emoji que 💔 se volvera a enviar otra imagen.').then(msg => {
        msg.react(emoji).then(r => {
            msg.react(emoji1)
            const yes = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
            const nopleas = (reaction, user) => reaction.emoji.name === emoji1 && user.id === message.author.id;
            const sure = msg.createReactionCollector(yes, {
                time: 1000000
            });
            const no = msg.createReactionCollector(nopleas, {
                time: 1000000
            });
            sure.on('collect', r => {
                msg.delete();
                const emb = new Discord.RichEmbed()
                    .setColor(0xFFFF00)
                    .setImage(muertes[Math.floor(Math.random() * muertes.length)])
                    .setFooter(`Pedido Por: ${message.author.tag}`);
                message.channel.send({
                    embed: emb
                })
            })
            no.on('collect', r => {
                msg.delete();
            })
        })
    })
});
}
  //  });
//}
                