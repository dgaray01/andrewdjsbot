exports.run = (client, message, args) => {
const Discord = require ("discord.js")
var Jimp = require("jimp");
var server = message.guild;
let p1  = Jimp.read(server.iconURL);
let p2   = Jimp.read('https://i.imgur.com/An9tZNl.png');
let p3 =   Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
let p4 =   Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
let p5  =  Jimp.read("https://cloud.githubusercontent.com/assets/414918/11165709/051d10b0-8b0f-11e5-864a-20ef0bada8d6.png");
Promise.all([p1, p2, p3, p4, p5]).then(function (images) {
  

      let img = images[0];
      let lv = images[1];
      let fuente = images[2];
      let fuente2 = images[3];
      let mask = images[4]
  
      mask.resize(50, 50);
      img.resize(50, 50);
      img.mask(mask, 0, 0);

      lv.print(fuente, 90, 285, `${server.name}`);
      lv.print(fuente, 50, 57, `${server.members.filter(member => member.presence.status == 'online').size} Miembros Online`);
      lv.print(fuente2, 50, 100, `${server.members.filter(member => member.presence.status == 'idle').size} Miembros Ausentes`,);
      lv.print(fuente, 50, 144, `${server.members.filter(member => member.presence.status == 'dnd').size} Miembros Ocupados`, 425);
      lv.print(fuente, 50, 210, `${server.members.filter(member => member.presence.status == 'offline').size} Miembros Offline`, 425);

                lv.composite(img, 30, 270).getBuffer(Jimp.MIME_PNG, (err, image) => {
                      if (err) throw err;
                  
                         let embed = new Discord.RichEmbed()
  .setAuthor("Andrew | Estado De los Miembros", client.user.avatarURL)
  .setDescription ( message.author.username + " **Mira en que estado estan los miembros de **" + message.guild + " ``📍``")
  .attachFiles([{
    attachment: image,
    name: "gente.png"
  }])
  .setImage("attachment://gente.png")
  .setColor("RANDOM")
                  
                       message.channel.send(embed)
                      
           })
             }
)
}