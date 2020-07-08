const Discord = require("discord.js");

exports.run = async (client, message, args, prefix_db) => {
    
 let embed = new Discord.RichEmbed()
  .setTitle("Eval")
  .setDescription("Este Comando Solo Es Para El **DEVELOPER**.")
  .setColor("#cdf785");
  if(message.author.id !== '460314183859175434' ) return message.channel.send(embed);
  
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}try {
      const code = args.join(" ");
      let evaled = eval(code);
      let rawEvaled = evaled;
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
  
  let embed = new Discord.RichEmbed()
      .setTitle(`Evaluado En ${Math.round(client.ping)}ms`)
      .addField(":inbox_tray: Entrada", `\`\`\`js\n${code}\n\`\`\``)
      .addField(":outbox_tray: Salida", `\`\`\`js\n${clean(evaled).replace(client.token, "Me Estas Llamando Tonto?")}\n\`\`\``)
      .addField('Tipo', `\`\`\`xl\n${(typeof rawEvaled).substr(0, 1).toUpperCase() + (typeof rawEvaled).substr(1)}\n\`\`\``)
      .setColor('GREEN');
      message.channel.send({embed});
    } catch (err) {
      
      message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
    }
}