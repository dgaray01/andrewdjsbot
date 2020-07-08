exports.run = async (client, message, args) => {    
const { get } = require('node-superfetch')
const { body } = await get('https://marsapi.glitch.me/media/imgs/meme.json')
message.channel.send(body.url)
}