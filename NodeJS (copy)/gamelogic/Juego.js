const LinkedList = require("../datastructures/LinkedList.js");

module.exports = class Juego{
	constructor(dimension){
		this._dimension = dimension;
		this._tablero = [];
	}

	inicializarTablero(){
		//Creación de la matriz de juego
		for (var i = 0; i < this._dimension; i++) {
			this._tablero[i] = [];
			for (var j = 0; j < this._dimension; j++) {
				this._tablero[i][j] = 0;
			}
		}
		//Posiciones centrales de la matriz inicializadas con las 4 fichas iniciales.
		var indice = Math.trunc(this._dimension/2);
		this._tablero[indice - 1][indice - 1] = 1;
	    this._tablero[indice][(indice) - 1] = 2;
	    this._tablero[indice - 1][indice] = 2;
	    this._tablero[indice][indice] = 1;
	    return this._tablero;
	}

	imprimirTablero(){
		console.log('Tablero de juego: ');
		for (var i = 0; i < this._dimension; i++) {
			var row = "";
			for (var j = 0; j < this._dimension; j++) {
				row += " " + this._tablero[i][j];
			}
			console.log(row);
		}
	}

	esquinaSuperiorIzquierda(listaAdyacentes){
		listaAdyacentes.add([1, 0]);
		listaAdyacentes.add([1, 1]);
		listaAdyacentes.add([0, 1]);
		return listaAdyacentes;
	}

	esquinaInferiorIzquierda(listaAdyacentes, borde){
		listaAdyacentes.add([1, borde]);
		listaAdyacentes.add([1, borde - 1]);
		listaAdyacentes.add([0, borde - 1]);
		return listaAdyacentes;
	}

	esquinaSuperiorDerecha(listaAdyacentes, borde){
		listaAdyacentes.add([borde - 1, 0]);
		listaAdyacentes.add([borde - 1, 1]);
		listaAdyacentes.add([borde, 1]);
		return listaAdyacentes;
	}

	esquinaInferiorDerecha(listaAdyacentes, borde){
		listaAdyacentes.add([borde - 1, borde]);
		listaAdyacentes.add([borde - 1, borde - 1]);
		listaAdyacentes.add([borde, borde - 1]);
		return listaAdyacentes;
	}

	bordeIzquierdo(listaAdyacentes, y){
		listaAdyacentes.add([0, y - 1]);
		listaAdyacentes.add([1, y - 1]);
		listaAdyacentes.add([1, y]);
		listaAdyacentes.add([1, y + 1]);
		listaAdyacentes.add([0, y + 1]);
		return listaAdyacentes;
	}

	bordeDerecho(listaAdyacentes, y, borde){
		listaAdyacentes.add([borde, y - 1]);
		listaAdyacentes.add([borde - 1, y - 1]);
		listaAdyacentes.add([borde - 1, y]);
		listaAdyacentes.add([borde - 1, y + 1]);
		listaAdyacentes.add([borde, y + 1]);
		return listaAdyacentes;
	}

	bordeSuperior(listaAdyacentes, x){
		listaAdyacentes.add([x - 1, 0]);
		listaAdyacentes.add([x - 1, 1]);
		listaAdyacentes.add([x, 1]);
		listaAdyacentes.add([x + 1, 1]);
		listaAdyacentes.add([x + 1, 0]);
		return listaAdyacentes;
	}

	bordeInferior(listaAdyacentes, x, borde){
		listaAdyacentes.add([x - 1, borde]);
		listaAdyacentes.add([x - 1, borde - 1]);
		listaAdyacentes.add([x, borde - 1]);
		listaAdyacentes.add([x + 1, borde - 1]);
		listaAdyacentes.add([x + 1, borde]);
		return listaAdyacentes;
	}

	posicionesCentrales(listaAdyacentes, x, y){
        listaAdyacentes.add([x - 1, y - 1]);
		listaAdyacentes.add([x, y - 1]);
		listaAdyacentes.add([x + 1, y - 1]);
		listaAdyacentes.add([x + 1, y]);
		listaAdyacentes.add([x + 1, y + 1]);
		listaAdyacentes.add([x, y + 1]);
		listaAdyacentes.add([x - 1, y + 1]);
		listaAdyacentes.add([x - 1, y]);
		return listaAdyacentes;
	}

	obtenerPosicionesAdyacentes(listaAdyacentes, x, y, borde){
		if(x == 0 && y == 0)
			listaAdyacentes = this.esquinaSuperiorIzquierda(listaAdyacentes);
		else if(x == 0 && y == borde)
			listaAdyacentes = this.esquinaInferiorIzquierda(listaAdyacentes, borde);
		else if(x == borde && y == 0)
			listaAdyacentes = this.esquinaSuperiorDerecha(listaAdyacentes, borde);
		else if(x == borde && y == borde)
			listaAdyacentes = this.esquinaInferiorDerecha(listaAdyacentes, borde);
		else if(x == 0)
			listaAdyacentes = this.bordeIzquierdo(listaAdyacentes, y);
		else if (x == borde)
			listaAdyacentes = this.bordeDerecho(listaAdyacentes, y, borde);
		else if(y == 0)
			listaAdyacentes = this.bordeSuperior(listaAdyacentes, x);
		else if(y == borde)
			listaAdyacentes = this.bordeInferior(listaAdyacentes, x, borde);
		else
			listaAdyacentes = this.posicionesCentrales(listaAdyacentes, x, y);

		return listaAdyacentes;
	}

	verificaMovimiento(x, y, jugador){
		var jugadorContrario = 1;
		if(jugador == 1)
			jugadorContrario = 2;

		var borde = this._dimension - 1;

		let listaAdyacentes = new LinkedList();
		listaAdyacentes = this.obtenerPosicionesAdyacentes(listaAdyacentes, x, y, borde);

		let listaAdyacentesContrincario = new LinkedList();
		listaAdyacentesContrincario = this.obtenerPosicionesAdyacentesContrincario(listaAdyacentesContrincario, listaAdyacentes, jugadorContrario);

		//Hasta este punto ya se tienen sólo las fichas que son del jugador contrario alrededor de la posición propuesta

		if(listaAdyacentesContrincario.length == 0){
			console.log("Jugada no válida. Posición sin fichas oponentes aledañas.");
			return this._tablero;
		}else{
			let listaFichasJugador = new LinkedList();
			for(var i = 0; i < listaAdyacentesContrincario.length; i++){
				let listaFichasPotenciales = new LinkedList();
				var cont = listaAdyacentesContrincario.get(i).data;
				listaFichasPotenciales = this.evaluarCaminoDeFichasOponentes(cont[0], cont[1], cont[0], cont[1], x, y, jugadorContrario, jugador, listaFichasPotenciales);
				try{
					var index = listaFichasPotenciales.length - 1;
					if(listaFichasPotenciales.get(index).data != -1){
						listaFichasJugador = this.agregarLista(listaFichasJugador, listaFichasPotenciales);
					}
				}catch(error){
					console.log("Camino no válido, índice fuera del tablero. " + error);
				}
			}

			if(listaFichasJugador.length == 0){
				console.log("Jugada no válida. No existe ficha propia que encierre fichas oponentes en conjunto con la ficha solicitada.");
				return this._tablero;
			}else{
				this._tablero[y][x] = jugador;
				for(var i = 0; i < listaFichasJugador.length; i++){
					var ficha = listaFichasJugador.get(i).data;
					this._tablero[ficha[1]][ficha[0]] = jugador;
				}
				return this._tablero;
			}
		}
	}

	agregarLista(listaFichasJugador, listaFichasPotenciales){
		//listaFichasPotenciales.printList("Lista fichas potenciales en agregarLista");
		var largo = listaFichasPotenciales.length;
		for(var i = 0; i < largo; i++){
			listaFichasJugador.add(listaFichasPotenciales.get(i).data);
		}
		return listaFichasJugador;
	}

	agregarFicha(listaFichasJugador, ficha){
		listaFichasJugador.add(ficha);
		return listaFichasJugador;
	}

	evaluarCaminoDeFichasOponentes(posx, posy, iniX, iniY, x, y, jugadorContrario, jugador, listaFichasJugador){
		//console.log("Evaluando camino de fichas oponentes...");
		try{
			let listaError = new LinkedList();
			if(posx < 0 || posy < 0){
				listaError.add(-1);
				return listaError;
			}
			else{

				if(this._tablero[posx][posy] == jugadorContrario){
					listaFichasJugador = this.agregarFicha(listaFichasJugador, [posx, posy]);
					return this.evaluarCaminoDeFichasOponentes((iniX + (posx - x)), (iniY + (posy - y)), iniX, iniY, x, y, jugadorContrario, jugador, listaFichasJugador);
				}else if(this._tablero[posx][posy] == jugador){
					//Se encontró la ficha que encierra el camino de fichas contrarias
					return listaFichasJugador;
				}else{
					//Espacio vacío de la tabla, por lo que no completa el camino. Jugada inválida
					let listaError = new LinkedList();
					listaError.add(-1);
					return listaError;
				}
			}
		}catch(error){
			console.log("Error: " + error);
			listaError.add(-1);
			return listaError;
		}
	}

	obtenerPosicionesAdyacentesContrincario(listaAdyacentesContrincario, listaAdyacentes, jugadorContrario){
		for(var i = 0; i < listaAdyacentes.length; i++){
			if(this._tablero[listaAdyacentes.get(i).data[0]][listaAdyacentes.get(i).data[1]] == jugadorContrario){
				listaAdyacentesContrincario.add(listaAdyacentes.get(i).data);
			}
		}
		return listaAdyacentesContrincario;
	}

	realizarJugada(x, y, jugador){
		var jug = jugador % 2;
		if(jugador % 2 == 1)
			jug = 1;
		else
			jug = 2;

		this._tablero = this.verificaMovimiento(x, y, jug);
		return this._tablero;
	}

	tablaLlena(){
		var llena = true;
		for(var x = 0; x < this._dimension; x++){
			for(var y = 0; y < this._dimension; y++){
				if(this._tablero[x][y] == 0)
					llena = false;
			}
		}
		return llena;
	}

	definirGanador(){
		var jug1 = 0;
		var jug2 = 0;

		for(var x = 0; x < this._dimension; x++){
			for (var y = 0; y < this._dimension; y++) {
				if(this._tablero[x][y] == 1)
					jug1++;
				else if(this._tablero[x][y] == 2)
					jug2++;
			}
		}
		if(jug1 > jug2)
			return 1;
		else if(jug1 < jug2)
			return 2;
		else
			return 0;
	}
};