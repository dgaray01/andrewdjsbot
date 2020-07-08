const { Canvas } = require('canvas-constructor');
const snekfetch = require('snekfetch');
const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
	let users = msg.mentions.users.map(u => u);
	let COCOK = msg.mentions.users.map(u => u.id);
	if(users.length < 2) return msg.channel.send('**Para Calcular el Amor Necesitas Mencionar a un usuario! ``💓`` ** \n ≦Ejemplo≧  ➡️ a!ship **(@Mencion1) (@Mencion2)**');
	let shipname = '';
	for(let i = 0; i < 2; i++){
		shipname += `${users[i].username.substring(0, users[i].username.length / 2)}`
	}
      
	let percent = getPercent(shipname);
	if(COCOK.includes('462780441594822687') && COCOK.includes('478572042384572424')) percent = `__**${shipname}**__\n❤ **99% Pero Bueno Willy :heart:**`;
	
	if(!users[0].avatarURL && !users[1].avatarURL) return msg.channel.send(percent);
    const m = await msg.channel.send('``💓`` Calculando el Amor! ... \n ``🌀`` Cargando El un Futuro alterno ...');
    msg.channel.startTyping();
    const image = await getShip(client, users[0].avatarURL, users[1].avatarURL);
    const { RichEmbed } = require('discord.js');
    const emb = new Discord.RichEmbed()
    .setAuthor("Andrew | Amor Calculado!", client.user.avatarURL)
    .setColor('RANDOM')
    .addField("Nombre De Usuarios Juntos :" , percent)
    .attachFile({attachment:image, name:'ss.jpg'})
    .setImage('attachment://ss.jpg');
    msg.channel.send(emb).then(()=> { msg.channel.stopTyping(); m.delete();});
};

async function getShip(client, ship1, ship2){
	const link = /\.gif.+/g;
	const user1 = await snekfetch.get(ship1.replace(link, '.jpg'));
	const user2 = await snekfetch.get(ship2.replace(link, '.jpg'));
  const moe = await snekfetch.get('https://cdn.glitch.com/efe3bf10-38d3-4ce6-b72c-a74e2a6b50f6%2F1530760219.png?1530760650106');
	return new Canvas(256, 128)
    .setColor(client.color)
    .addImage(user1.body, 0, 0, 128, 128)
    .addImage(user2.body, 128, 0, 128, 128)
    .addImage(moe.body, 106, 51, 44, 38)
    .toBuffer();
}

function getPercent (shipname){
	let percent = Math.floor(Math.random()*100);
	if(percent < 60){
		return `__**${shipname}**__\n❤ **${percent}% No esta mal** `;
	}else if(percent > 60 && percent < 89){
		return `__**${shipname}**__\n❤ **${percent}% Un Ship Amoroso** `;
	}else if(percent > 89){
		return `__**${shipname}**__\n❤ **${percent}% Perfecto!** `;
	}
}
