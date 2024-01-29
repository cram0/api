// On importe les modules dont on a besoin
// en l'occurence express et dotenv
const express = require("express");
require("dotenv").config();

// On crée l'application express
const api = express();

// On importe les middlewares
const informations = require("./middlewares/informations");

//  On lance le serveur sur le port donné dans le fichier .env
api.listen(process.env.API_PORT, () => {
	console.log(`API is running on port ${process.env.API_PORT}`);
});

//  On utilise le middleware informations pour toutes les routes
//  de l'API
api.use(informations);

// On crée une route pour l'API
// Cette route est accessible via l'URL http://localhost:3030/
api.get("/", (req, res) => {
	res.send("Hello World!");
});
