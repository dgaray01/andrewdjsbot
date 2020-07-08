const Discord = require("discord.js");

exports.run = async (bot, message, args, color, prefix, client) => {
  var choice = args[0];
  if (choice == "papel" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "papel";
    } else if (numb > 50) {
      var choice2 = "piedra";
    } else {
      var choice2 = "tijeras";
    }
    if (choice2 == "tijeras") {
      var response = "He elegido **Tijeras**! :v: He ganado!"
    } else if (choice2 == "paper") {
      var response = "He elegido **Papel**! :hand_splayed: És una empate!"
    } else {
      var response = "He elegido **Piedra**! :punch: Tu ganas!"
    }
    message.channel.send(response);
  } else if (choice == "piedra" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "papel";
    } else if (numb > 50) {
      var choice2 = "piedra";
    } else {
      var choice2 = "tijeras";
    }
    if (choice2 == "papel") {
      var response = "He elegido **Papel**! :hand_splayed: He ganado!"
    } else if (choice2 == "piedra") {
      var response = "He elegido **Pedra**! :punch: Es una empate!"
    } else {
      var response = "He elegido **Tijeras**! :v: Tu ganas!"
    }
    message.channel.send(response);
  } else if (choice == "tijeras" || choice == "t") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "papel";
    } else if (numb > 50) {
      var choice2 = "piedra";
    } else {
      var choice2 = "tijeras";
    }
    if (choice2 == "piedra") {
      var response = "He elegido **Papel**! :hand_splayed: Tu ganas!"
    } else if (choice2 == "tijeras") {
      var response = "He elegido **Tijeras**! :v: es una empate!"
    } else {
      var response = "He elegido **Piedra**! :punch: Tu ganas!"
    }
    message.channel.send(response);
  } else {
    
     let texto = args.join(""); 
const embed = new Discord.RichEmbed() 

.setColor("RANDOM")
  .setAuthor("Andrew | Piedra papel o tijeras Ejemplo", "https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png?size=2048")
    .setDescription("Juega con el bot a Piedra papel o tijeras! ")
    .setThumbnail("https://www.esquireme.com/sites/default/files/styles/full_img/public/images/2017/05/29/rock_paper_scissors__2x.png")
    .addField("Ejemplo de Comando", "**a!rps (piedra,papel,tijeras)** elije alguno de esas!")
    .setImage("https://imgur.com/jPzshPd.png")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp(message.createdAt)

   if(!texto) return message.channel.send(embed);
  }
}
