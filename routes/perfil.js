const express = require('express');
const router = express.Router();
const CheckAuth = require('../auth/auth');
const db = require("quick.db")

router.get('/', CheckAuth, async(req, res) => {
  
  
let premium = await db.fetch(`premiun_${req.user.id}`)
  let followers = await db.fetch(`followers_${req.user.id}`)
  let following = await db.fetch(`${req.user.id}_followings`)
  
  if(premium == "null") premium = "No Premium"
   if(premium == "yes") premium = "Premium"
  
 if(followers == "null") followers = "0"
  if(following == "null") following = "0"

  let stat = await db.fetch(`status_${req.user.id}`)
  if(stat === "null") stat = "No se ha agregado ningun estado." 
  
    let datoServidores = req.user.guilds.filter(p => (p.permissions & 2146958591) === 2146958591);
    
    let base = req.db;
    let idusuario = req.user.id; // representa al id del usuario logeado;
    let datosdb;

    res.render("perfil.ejs", {
        status: (req.isAuthenticated() ? "Perfil" : "Login"),
        client: req.bot,
        user: req.user,
         stat: stat,
      premium: premium,
      followers: followers,
      following: following,
        servidores: datoServidores,
        login: (req.isAuthenticated() ? "si": "no"),
        invite: `https://discordapp.com/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=0&scope=bot`
    });

  
});


module.exports = router;
