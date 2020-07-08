const Discord = require("discord.js")
exports.run = async(client, message, args) => {
  
    var emoji = client.emojis.get("708488552345894963")
    let msg = await message.channel.send("**Presiona <:f_:708488552345894963> para mostrar respetos.**");
    msg.react(emoji);
    let a = 0
    msg.awaitReactions((reaction, user) => {
      if(user.bot) return;
      if(emoji === reaction.emoji){
        message.channel.send(` **${user.username}** Ha dado sus respetos. `)
        a++
      }   
      
    },{max: 1, time: 5000})
      .then(c => {
        if(a === 0){
          message.channel.send("Absolutamente nadie quiso dar sus respetos a **" + message.author.username + "**")
        }else if(a === 1){
          message.channel.send("Al final solo una persona dio sus respetos a **" +   message.author.username + "**"  )
        }else{
          message.channel.send("Al final " + a + " personas dieron sus respetos a **" + message.author.username + "**" )
        }
      })
}