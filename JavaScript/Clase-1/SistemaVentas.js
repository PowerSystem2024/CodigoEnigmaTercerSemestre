
// Clase base
class DispositivoEntrada {
    constructor(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    toString() {
        return `Tipo de Entrada: ${this._tipoEntrada}`;
    }
}

// Clase Teclado
class Teclado extends DispositivoEntrada {
    static contadorTeclado = 0;

    constructor(tipoEntrada) {
        super(tipoEntrada);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    toString() {
        return `Teclado [ID: ${this._idTeclado}, ${super.toString()}]`;
    }
}

// Clase Raton
class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada) {
        super(tipoEntrada);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString() {
        return `Ratón [ID: ${this._idRaton}, ${super.toString()}]`;
    }
}

// Clase Monitor
class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    toString() {
        return `Monitor [ID: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`;
    }
}

// Clase Computadora
class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString() {
        return `Computadora [ID: ${this._idComputadora}, Nombre: ${this._nombre}]
  ${this._monitor.toString()}
  ${this._teclado.toString()}
  ${this._raton.toString()}`;
    }
}

// Clase Orden
class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let computadorasStr = this._computadoras.map(c => c.toString()).join('\n');
        return `Orden [ID: ${this._idOrden}]:\n${computadorasStr}`;
    }
}

// Prueba del sistema
let monitor1 = new Monitor("Samsung", "24 pulgadas");
let teclado1 = new Teclado("USB");
let raton1 = new Raton("USB");
let pc1 = new Computadora("PC Gamer", monitor1, teclado1, raton1);

let orden1 = new Orden();
orden1.agregarComputadora(pc1);

console.log(orden1.mostrarOrden());
