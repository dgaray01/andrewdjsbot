let Discord = require('discord.js')
exports.run = async(client, message, args) => {
    const jimp = require('jimp')
    let user = args.join(" ") //Guardamos las variables en una coleccion
    if (!user) return message.channel.send('Necesitas poner el nombre del usuario que se logueara'); //Si el usuario no pone un mensaje este no continuara con el proceso.
    let font = await jimp.loadFont(jimp.FONT_SANS_64_BLACK) //Cargamos una fuente
    let welcome = await jimp.read('https://cdn.glitch.com/b5c9e52b-579b-428f-bb68-296ace8ae11e%2FCapture.PNG?1557860543348') //Cargamos la imagen en link.
        //https://cdn.glitch.com/5015b701-f6b8-4567-897f-4ca1810abc26%2Fimage.png?v=1560793332657
    welcome.print(font, 500, 260, `${user}`) //Se escribe el texto dentro de la coleccion "user" y lo pone en la imagen.
    welcome.write('login.png')
  
   let embud = new Discord.RichEmbed()
   .setAuthor("Andrew | Login Paypal ", client.user.avatarURL)
  .setDescription ("``👨🏼‍💻`` **Te Haz Logeado en paypal**")
  .attachFiles([{
    attachment: "login.png",
    name: "login.png"
  }])
  .setImage("attachment://login.png")
  .setColor("RANDOM")
   //Guarda la imagen en un archivo.png
    message.channel.send(embud) //Se envia la imagen al canal.
}

//Creditos LHCLYT :)
