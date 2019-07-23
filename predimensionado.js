'use strict';

class Tabique {
    cant_pisos = 1;
    f_compresion = 300;
    constructor(x, y, largo){
        this.tab_x = x;
        this.tab_y = y;
        this.tab_largo = largo;
    }
    get areaInfluencia(){return this.x * this.y;}
    get ns(){return this.areaInfluencia * 9 * this.cant_pisos}
    get ag(){return (2.15 * this.ns*100)/(0.85*this.f_compresion);} //Area
    get espesor(){return this.ag**2/this.tab_largo;}
}

class Columna {
    constructor(col_x, col_y, carga_piso, cant_pisos){
        this.col_x = col_x;
        this.col_y = col_y;
        this.carga_piso = carga_piso;
        this.cant_pisos = cant_pisos;
    }
    get y(){return this.col_y;} //M
    set y(valor){this.col_y = valor;} //M
    get x(){return this.col_x;} //M
    set x(valor){this.col_x = valor;} //M
    get cargaPiso(){return this.carga_piso;}
    get cantPisos(){return this.cant_pisos;}
    get areaInfluencia(){return this.x * this.y;} //M2
    get totalPisos(){return this.cargaPiso * this.cantPisos;}
    get ns(){return this.areaInfluencia * 9 * this.totalPisos;} //Kn
    get ag(){return (2.15 * this.ns*100)/(0.85*300);} //cm2
};

function crearColumna(){
    let col_x = document.getElementById('columna_x').value;
    let col_y = document.getElementById('columna_y').value;
    let col_carga_piso = document.getElementById('columna_carga_piso').value;
    let col_cantidad_piso = document.getElementById('columna_cantidad_piso').value;
    if(isNumber(col_x) && isNumber(col_y) && isNumber(col_carga_piso) && isNumber(col_cantidad_piso)){
        let columna = new Columna(col_x, col_y, col_carga_piso, col_cantidad_piso);
        let ns = "Ns Columna (kN) = (" + columna.x + " ancho * " + columna.y + " alto) m2 * 9 kN/m2 * (" + columna.cargaPiso + " kN * " + columna.cantPisos + " pisos) = " + columna.ns + " kN";
        let ag = "Ag Columna (cm2) = (2,15 * " + columna.ns + " kN) / (0,85 * 300 kg/cm2) = " + columna.ag + " cm2";
        document.getElementById('resultado').innerHTML = "<p>" + ns + "<br>" + ag + "</p>";
    }
}

function isNumber(valor){
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}