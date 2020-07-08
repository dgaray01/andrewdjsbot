const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://media2.giphy.com/media/uQpGnyRWzWaek/giphy.gif",
                "https://media1.tenor.com/images/179e3dfd1f438bf5e1c779915b2b03c0/tenor.gif",
                "https://media1.tenor.com/images/cf95c0dd106b0364405346d10610963c/tenor.gif",
                "https://media1.tenor.com/images/d3ae99081ded077ccedc4c8acbddc6b4/tenor.gif",
                "https://pa1.narvii.com/6033/1711e496c365717e2b8694db29de9e5b4076c7f3_hq.gif",
                "https://data.whicdn.com/images/150195537/original.gif",
                "https://data.whicdn.com/images/315351123/original.gif",
                "https://data.whicdn.com/images/163147236/original.gif",
                "https://media1.tenor.com/images/8ac4c65df4acfd03f37b96dbd4f8e2f0/tenor.gif",
                "https://media1.tenor.com/images/6f5a3ffc7cc357db72c7a8f25584e80b/tenor.gif",
                "https://thumbs.gfycat.com/FairSoreBooby-size_restricted.gif",
                "https://thumbs.gfycat.com/VastFailingBlackmamba-size_restricted.gif",
                "https://i.redd.it/7kpk7nm7awr01.gif",
                "https://66.media.tumblr.com/755fc5c059f0db52fbc0fba69c34f995/tumblr_p51pxmJ88P1veb9dio1_500.gif",
                "https://i.redd.it/x3i36pkhzn111.gif",
                "https://data.whicdn.com/images/295501312/original.gif",
                "https://i.kym-cdn.com/photos/images/original/001/246/561/3fb.gif",
                "https://i.pinimg.com/originals/e4/74/3e/e4743e63c105843f2806f5db729643ea.gif",  
                 "http://38.media.tumblr.com/c7c1ee6c2c99dcd2095009a4cef40937/tumblr_n18lelLWYU1r1fy4bo1_500.gif",
                 "http://24.media.tumblr.com/88cb678b0745b987fa549e866bc63b93/tumblr_my9x7sSO1Q1sok1sro1_500.gif",
                 "https://i.pinimg.com/originals/cf/c1/cc/cfc1cc4adceb00a47ef251161633eff3.gif",
                 "https://66.media.tumblr.com/e957f64cf1b61677ba6895dbc88f994d/tumblr_pd7vg3S3Ou1ru8plxo1_400.gif",
                 "https://media0.giphy.com/media/3ov9jCYBYtLNI3Qqbu/giphy.gif",
                 "https://66.media.tumblr.com/275d9f4dd3c8067d32a00d52157548cc/tumblr_ozkn6zMPEd1tlkklno1_400.gif",
                 "https://thumbs.gfycat.com/WatchfulGentleAmurratsnake-size_restricted.gif",
                 "https://thumbs.gfycat.com/AdolescentForsakenIndianrockpython-size_restricted.gif",
                 "http://www.lovethisgif.com/uploaded_images/43328-Black-And-White-Cool-Chest-Water-Bath-Anime-Girl-Anime.gif",
                 "https://d.wattpad.com/story_parts/245294850/images/14459b28249b6902.gif",
                 "https://www.anime-wallpaper.net/images/Eromanga%20Sensei/849184017.gif",
                 "https://i.redd.it/f83j5ci162c21.gif",
                 "https://66.media.tumblr.com/e5320d7e118210966e5e9c671726fd8b/tumblr_ph5v5igBXs1tcvan1o1_400.gif",
                 "https://media3.giphy.com/media/3vzcTN3OoHRHw6nrrt/giphy.gif",
                ]

    var embed = new Discord.RichEmbed()
   .setAuthor("Andrew | Bañar ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author.username +' Se esta bañandose ``🧼🚿``**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }