const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

       let replies = [`Boo`, `**=D ?**`, `👻`, `uwu`, `heck`, `We're Always Watching xoxo`,
`oof`, `YIKES`, `**Pedo Alert**`, `eAlert`, `meh`, `This one is GhostHandy Top Notch`]
        let result = Math.floor(Math.random() * replies.length);
  
var gifs = ["https://cdn.discordapp.com/attachments/505186206267473941/558513734595641344/Grrr.png",
                "https://cdn.discordapp.com/attachments/505186206267473941/558513737179332617/Meh.png", 
                "https://cdn.discordapp.com/attachments/505186206267473941/558513740199231488/HeartGhost.png",
                "https://cdn.discordapp.com/attachments/505186206267473941/558514169465274368/CookieGhost.png",
                "https://cdn.discordapp.com/attachments/505186206267473941/558514171239596032/Cri.png",
                "https://images-ext-1.discordapp.net/external/OawT9Cue3TruAYJ1Zabnmmzlt9xl6YHBfWbcp9dD2uA/%3Fv%3D1/https/cdn.discordapp.com/emojis/546225047488954378.png"]
            var temp = gifs[Math.floor(Math.random() * 6)]

    let exposesearch = args.slice(0).join('-');

        let link = `https://www.exposing.ml/exposes/` + exposesearch;
        if(!exposesearch)return message.channel.send(`**Hive Exposed 🐝 |** Please specifiy a Username! `)
        if(!link)return message.channel.send("**Hive Exposed 🐝 |** Console error")
        let embed = new Discord.RichEmbed()
	
    .setColor(0xffd800)
    .setAuthor('HiveMC Exposes 🐝', 'https://i.imgur.com/7G9BnQL.png')
    .setTitle(`**» Visit the Expose Here! «**`)
    .setURL(`${link}`)
    .setThumbnail(temp)
    .setDescription(`${replies[result]}. Hive Exposed Search Result for:\n **${args.slice(0).join(' ')}**`)
	.addField('**Expose Link**', `${link}`)
                  
	message.channel.send(embed);
  
}



module.exports.help = {
    name: "exposed"
}