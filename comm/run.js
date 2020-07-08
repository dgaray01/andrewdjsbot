const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://cdn.discordapp.com/attachments/585624587577065482/585643761313513473/1.gif",
                "https://cdn.discordapp.com/attachments/585624587577065482/585643779084648461/2.gif",
                "https://cdn.discordapp.com/attachments/585624587577065482/585643840082280455/3.gif",
                "https://cdn.discordapp.com/attachments/585624587577065482/585643854045380630/4.gif",
                "https://cdn.discordapp.com/attachments/585624587577065482/585643867626536990/5.gif",
                "https://cdn.discordapp.com/attachments/585624587577065482/585643883954831390/6.gif",
                "https://cdn.discordapp.com/attachments/585624587577065482/585643903307481103/7.gif",
                "https://cdn.discordapp.com/attachments/585624587577065482/585643927168614421/8.gif",
                "https://cdn.discordapp.com/attachments/585624587577065482/585644029421682709/9.gif",
                "https://cdn.discordapp.com/attachments/585624587577065482/585644063252938788/10.gif",
                "https://thumbs.gfycat.com/ImpureDismalEgret-size_restricted.gif",
                "https://media3.giphy.com/media/SdW7SEleK00Ug/giphy.gif",
                "https://media.tenor.com/images/7a2ab7bd487ef2f0da1ec8d711c75acc/tenor.gif",
                "https://media1.giphy.com/media/CRWdhM1XgJ7Pi/giphy.gif",
                "https://2.bp.blogspot.com/-nDU5jTVUqAk/WqHtr49_CcI/AAAAAAAACl0/2rtiy2DlHh8ciQXoN4Ch9Ebjbv9QIq3VQCLcBGAs/s1600/04b%2BEuphonium%2BKumiko%2BRunning.gif",
                "https://cdn.myanimelist.net/s/common/uploaded_files/1460140429-d60a2b5a534becb71153db8eaaaf4e14.gif",
                "https://66.media.tumblr.com/94d8555a19bfe2b58fa81ee336ad8ead/tumblr_oh7977y0mr1vztiw8o1_400.gif",
                "https://cdn.myanimelist.net/s/common/uploaded_files/1460141222-926767558b23d47d23780a87abbc62dd.gif",
                 "https://media2.giphy.com/media/e3cwdbJLiLahO/giphy.gif",
                 "https://cdn.myanimelist.net/s/common/uploaded_files/1460140490-8b365d32a26712058adf10436dce0389.gif",
                 "https://i.gifer.com/79o6.gif",
                 "https://i.gifer.com/AEOb.gif",
                 "https://i.gifer.com/DEGl.gif",
                 "https://i.kym-cdn.com/photos/images/original/000/987/562/b2d.gif",
                 "http://cdn.lowgif.com/full/09d6d0c79c40c36b-anime-girl-running-gif-tumblr.gif",
                 "https://cdn.myanimelist.net/s/common/uploaded_files/1460139914-f1109b66f45c29d770e26da53e875508.gif",
                 "https://i.gifer.com/5m9a.gif",
                 "https://media3.giphy.com/media/gr1yFiGcouDbG/giphy.gif",
                 "https://media1.tenor.com/images/17edfb50ba26e75ffa27ba851034d627/tenor.gif",
                 "https://cdn.myanimelist.net/s/common/uploaded_files/1460140013-9af557e16033fc5c19443f576cccb0d4.gif",
                 "https://cdn.myanimelist.net/s/common/uploaded_files/1460139973-b7066d28787bf682eb32b0a31bddead2.gif",
                 "https://3.bp.blogspot.com/-iiqZhveJul8/V8OoszDbbLI/AAAAAAAAkrc/Vt9QlelHF_kU1YldFHNe_PNUIf_5IKepACPcB/s1600/Omake%2BGif%2BAnime%2B-%2BLove%2BLive%2521%2BSunshine%2521%2521%2B-%2BEpisode%2B9%2B-%2BKanan%2BRuns%2BHappy.gif",
                 "https://gifimage.net/wp-content/uploads/2017/09/anime-run-gif-7.gif",
                 "https://i.gifer.com/fW.gif",
                 "https://www.gifimage.net/wp-content/uploads/2017/09/anime-run-away-gif-2.gif",
                ]

    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Corre ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Empezo a Correr Rapidamente ``🏃🏻💨``**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }