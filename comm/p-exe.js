const Discord = require("discord.js")
exports.run = (client, message, args) => {

/*function changeNameFunction(){
let canal = client.channels.get("546325868213960732");
let anuncios = ["Página web", "Bienvenido", "a", "esta prueba"]
let anuncioRandom = anuncios[Math.floor(Math.random()*(anuncios.length - 0 + 1) + 0)]
    canal.setName(anuncioRandom)
}
setInterval(changeNameFunction, 10000);
  console.log("Panel cambiado.")
  
  
  function changeNameFunction(){
let canal = client.channels.get("546331478166994955");
let anuncios = ["www.japonnow.me/", "Bienvenido", "a", "esta prueba"]
let anuncioRandom = anuncios[Math.floor(Math.random()*(anuncios.length - 0 + 1) + 0)]
    canal.setName(anuncioRandom)
}
setInterval(changeNameFunction, 10000);
  console.log("Panel cambiado.")
  
  //546331478166994955*/
 
  
  function changeNameFunction(){
let canal = client.channels.get("547369138163679232");
let anuncios = ["⏰ANUNCIOS.Ξ X Ξ⏰", "🎧Nueva Musica🎧", "💙Todo Sobre Anime💙","⚔️Video Juegos⚔️","👽Locuras👽","🎇Diversion🎇"]
let anuncioRandom = anuncios[Math.floor(Math.random()*(anuncios.length - 0 + 1) + 0)]
    canal.setName(anuncioRandom)
}
setInterval(changeNameFunction, 5000);
  console.log("Hecho!")
  
  
  

  message.channel.send("Hecho")
}