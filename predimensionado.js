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
    get ns(){return this.areaInfluencia * this.cargaPiso * this.cantPisos;} //Kn
    get ag(){return (2.15 * this.ns*100)/(0.85*300);} //cm2
    get nsTexto(){
        return `Ns Columna (kN) = (${this.x}m ancho * ${this.y}m alto) * ${this.cargaPiso} kN/m2 * ${this.cantPisos} pisos = ${this.ns} kN`;
    }
    get agTexto(){
        return `Ag Columna (cm2) = (2,15 * (${this.ns} kN * 100)) / (0,85 * 300 kg/cm2) = ${this.ag} cm2;`;
    }
};

function crearColumna(){
    let col_x = parseFloat(document.getElementById('columna_x').value);
    let col_y = parseFloat(document.getElementById('columna_y').value);
    let col_carga_piso = parseFloat(document.getElementById('columna_carga_piso').value);
    let col_cantidad_piso = parseInt(document.getElementById('columna_cantidad_piso').value);
    if(true){
        let columna = new Columna(col_x, col_y, col_carga_piso, col_cantidad_piso);
        let ag = "Ag Columna (cm2) = (2,15 * " + columna.ns + " kN) / (0,85 * 300 kg/cm2) = " + columna.ag + " cm2";
        document.getElementById('resultado').innerHTML = "<p>" + columna.nsTexto + "<br>" + columna.agTexto + "</p>";
        document.getElementById('col_table').innerHTML += "<tr><td>" + (document.getElementById('col_table').getElementsByTagName('tr').length + 1) + "</td><td>" + columna.ns + "</td><td>" + columna.ag + "</td></tr>";
        columna.texto;
    } else {
        alert("error");
    }
}

function isNumber(valor){
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}