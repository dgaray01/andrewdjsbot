exports.run = async (client, message, args) => {
const Discord = require("discord.js");
const staff = ["462780441594822687", "460314183859175434", "210843961592381442", "513124915172474881"]
if (!staff.includes(message.author.id)) return message.channel.send("Tu no tienes permisos para ejecutar este comando");
let embed = new Discord.RichEmbed() 
  .setColor("#ff1d00")
  .setTitle("Andrew | Reseteando!")
  .setDescription("Espera 5 Segundos se esta Reiniciando el Bot")
  .setThumbnail("https://images-ext-2.discordapp.net/external/Vzm9au-6E_pP_qRbDk7Islauifh6KWhkCnKLm5ifKLI/https/i.imgur.com/7CXik3O.gif")
  .setFooter("Andrew | Reset", client.user.avatarURL)
  .setTimestamp()
  await message.channel.send(embed);
      client.destroy()
      process.exit();

}