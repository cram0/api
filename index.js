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

// On active le json
api.use(express.json());

// On importe les données des chiens
const breeds = require("./breed_list.json");

// On crée une route pour l'API
// Cette route est accessible via l'URL http://localhost:3030/
api.get("/", (req, res) => {
	return res.send("Hello World!");
});

api.get("/hello", (req, res) => {
	return res.send(`Hello ${req.query.name}!`);
});

api.post("/sum", (req, res) => {
	if (isNaN(req.body.a) || isNaN(req.body.b)) {
		return res.status(400).send("Bad request");
	}

	return res.send(`${req.body.a + req.body.b}`);
});

api.post("/sub", (req, res) => {
	if (isNaN(req.body.a) || isNaN(req.body.b)) {
		return res.status(400).send("Bad request");
	}

	return res.send(`${req.body.a - req.body.b}`);
});

api.post("/mul", (req, res) => {
	if (isNaN(req.body.a) || isNaN(req.body.b)) {
		return res.status(400).send("Bad request");
	}

	return res.send(`${req.body.a * req.body.b}`);
});

api.post("/div", (req, res) => {
	if (isNaN(req.body.a) || isNaN(req.body.b)) {
		return res.status(400).send("Bad request");
	}

	return res.send(`${req.body.a / req.body.b}`);
});

api.get("/rand", (req, res) => {
	// On convertit les strings en nombre
	const min = parseInt(req.query.min);
	const max = parseInt(req.query.max);

	// On vérifie que les nombres sont bien des nombres
	if (isNaN(min) || isNaN(max)) {
		// Si ce n'est pas le cas, on renvoie une erreur
		return res.status(400).send("Bad request");
	}

	// On génère un nombre aléatoire entre min et max
	const rand = Math.floor(Math.random() * (max - min + 1)) + min;

	return res.send(`${rand}`);
});

api.get("/randog", (req, res) => {
	// Les photos sont stockées dans le fichier breed_list.json

	// On génère un nombre aléatoire entre 0 et la taille du tableau - 1
	const breedLen = Math.floor(Math.random() * breeds.length);

	// On renvoie la photo correspondant à l'index généré aléatoirement
	return res.send(`<img src='${breeds[breedLen].image.url}'></img>`);
});
