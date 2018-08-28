var express = require('express');
var app = express();
const Juego = require("./gamelogic/Juego.js");
var cors = require("cors");
var bodyParser = require("body-parser");
let instanciaJuego;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
	/*let juego = new Juego(6);
	juego.inicializarTablero();
	juego.realizarJugada(1, 1, 2);
	juego.imprimirTablero();
  	var jsonData = {"dimension":juego._tablero};
  	res.send(jsonData);*/
});

/*
app.get('/login'){

}

app.get('/logged'){

}*/

app.get('/ingame', function(req, res){
	//Headers: x, y, jugador
	var coordX = req.headers.x;
	var coordY = req.headers.y;
	var jugador = req.headers.jugador;
	//instanciaJuego.realizarJugada(1, 1, 2);
	res.send({"jugadaValida":true, "mensaje":"jugada exitosa", "tablero lleno":false, "tablero":instanciaJuego._tablero});
});

app.get('/test', function(req, res){
	//Headers: tipo, jugador1, jugador2, dimension
	var tipo = req.headers.tipo;
	var jugador1 = req.headers.jugador1;
	var jugador2 = req.headers.jugador2;
	var dimension = req.headers.dimension;

	if(tipo == 1){
		//let juego = new Juego(dimension);
		instanciaJuego = new Juego(dimension);
		console.log("Jugador 1: " + jugador1);
		console.log("Jugador 2: " + jugador2);
		instanciaJuego.inicializarTablero();
		var response = {"indicador":true, "mensaje":"Juego aceptado", "tablero":instanciaJuego._tablero};
		res.send(response);
	}else if(tipo == 2){
		console.log("Juego 1vsCPU fácil");
		res.send("Juego 1vsCPU fácil");
	}else if(tipo == 3){
		console.log("Juego 1vsCPU medio");
		res.send("Juego 1vsCPU medio");
	}else{
		console.log("Juego 1vsCPU difícil");
		res.json({mensaje:"Juego 1vsCPU dificil"});
	}

});

app.listen(3000, function () {
    console.log('Servidor de Othello corriendo en puerto 3000!');
});
