export class Juego{
    private juego: {};
    
    constructor(tipo, jugador1, jugador2, dimension, jugadorActual){
        this.juego = {
            "tipo": tipo,
            "jugador1": jugador1,
            "jugador2": jugador2,
            "dimension": dimension
        };
    }
}