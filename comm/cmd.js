exports.run = (client, message, [command]) => {
const staff = ["460314183859175434", "462780441594822687"]   
if (!staff.includes(message.author.id)) return message.channel.send("Tu no tienes permisos para ejecutar este comando");
  if (!command) return message.reply("Necesitas Proporcionar Del Lo Que Quieres Actualizar");
  let run = false;
  try {
    delete require.cache[require.resolve(`../comm/${command}.js`)];
    run = true;
  } catch(e) {
    try {
      delete require.cache[require.resolve(`./${command}.js`)];
      run = true;
    } catch(e) {}
  }
  if (run) {
    message.channel.send(`El Comando: \`${command}\` Ha Sido Actualizado`);
  } else {
    message.channel.send(`No Puedo Buscar El Comando \`${command}\``);
  }
};