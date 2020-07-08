const Discord = require("discord.js")
exports.run = (client, message, args) => {
 var embed = new Discord.RichEmbed()
 
 //````  ▬▬▬»[]«▬▬▬ ▬▬▬
  .setThumbnail("https://cdn.discordapp.com/avatars/546544425615228928/f85b61c3f4da3ad11038c470e3c649ca.png?size=2048")
  //.addField("▬▬▬»[🌐PREFIJO]«▬▬▬", "Nuestro actual prefijo es este: ``a!``")
  .addField("▬▬▬»[🤖BOT]«▬▬▬", " ``setprefix`` ``bot`` ``esay`` ``say`` ``esay2`` ``esay3`` ``stats``")
  .addField("▬▬▬»[🔧MODERACIÓN]«▬▬▬", "``ban`` ``idban`` ``unban`` ``kick`` ``tempmute`` ``warn``")
  .addField("▬▬▬»[🎚ÚTILES]«▬▬▬", "``clear`` ``ping`` ``discordping`` ``avatar``  ``canales`` ``encuesta`` ``encuesta2`` ``iserver`` ``afk`` ")
  .addField("▬▬▬»[🔎INFORMACIÓN]«▬▬▬", "``user`` ``serverinfo`` ``members`` ``invsv``")
 .addField("▬▬▬»[🌐Busqueda]«▬▬▬", "``clima`` ``meme`` ``dog`` ``bird`` ``lagarto`` ``cat`` ``translate``")
 .addField("▬▬▬»[🎶 Musica]«▬▬▬", "``play`` ``skip`` ``stop`` ``volume`` ``playing`` ``queue`` ``pause`` ``resume``")
 .addField("▬▬▬»[👘Anime]«▬▬▬", "``waifu`` ``kawaii`` ``loli`` ``trapito`` ``husbando`` ``neko``  ``holo`` ``foxgirl`` ``ratewaifu`` ")
 .addField("▬▬▬»[🤣DIVERSIÓN]«▬▬▬", "``trump`` ``flipcoin`` ``basura`` ``drake`` ``logro`` ``triggered`` ``susto`` ``arte`` ``olvido`` ``bart`` ``logromc`` ``psicopata`` ``bob`` ")
 .addField("▬▬▬»[🎭REACCIONES]«▬▬▬", "``amor`` ``happy`` ``hug`` ``kill`` ``kiss`` ``lick`` ``punch`` ``suicide`` ``dance`` ``cry`` ``pat`` ``baka`` ``smug`` ``feed`` ``slap`` ``tickle`` ``cuddle`` ``poke`` ") 
  .addField("▬▬▬»[💠EXTRAS]«▬▬▬", "``redes`` ``invite`` ``hee`` ``donar``") 
 .addField ("▬▬▬[🧩PREMIUM]▬▬▬","Escribe `apremium` para más información.")
 .addField ("▬▬▬[📃INFO]▬▬▬","Escribe `ainfo` para más información.")
  .addField("▬▬▬»[🔰REDES SOCIALES]«▬▬▬", "[[Twitter](https://twitter.com/ChikoShidori?s=09) | [Página web](https://Youtube.com/) | [Invita a tus amigos](https://discord.gg/AS94sFH) | [Server](https://discord.gg/AS94sFH)")
 .setColor("RANDOM")
 
 
 message.channel.send(embed)
 }