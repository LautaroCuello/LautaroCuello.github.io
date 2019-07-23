'use strict';

var columnas = [];

class Tabique {
    constructor(x, y, largo){
        this.tab_x = x;
        this.tab_y = y;
        this.tab_largo = largo;
    }
    get areaInfluencia(){return this.x * this.y;}
    get ns(){return this.areaInfluencia * 9 * this.cant_pisos}
    get ag(){return (2.15 * this.ns*100)/(0.85*this.f_compresion);} //Area
    get espesor(){return this.ag**2/this.tab_largo;}
};

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
    let col_x = document.getElementById('columna_x').value;
    let col_y = document.getElementById('columna_y').value;
    let col_carga = document.getElementById('columna_carga_piso').value;
    let col_cant = document.getElementById('columna_cantidad_piso').value;
    if(parseFloat(col_x) && parseFloat(col_y) && parseFloat(col_carga) && parseInt(col_cant) && parseInt(col_cant) >= 1){
        columnas.push(new Columna(parseFloat(col_x), parseFloat(col_y), parseFloat(col_carga), parseInt(col_cant)));
        let position = document.getElementById('col_table').getElementsByTagName('tr').length;
        document.getElementById('resultado').innerHTML = "<p>" + columnas[position].nsTexto + "<br><br>" + columnas[position].agTexto + "</p>";
        let htmlInsert = "<tr><td>" + (position + 1) + "</td><td>" + columnas[position].ns + "</td><td>" + columnas[position].ag + "</td><td onclick='toggleData(columnas["+ position +"], "+ position +")'>+</td></tr><div id='col" + position + "'></div>";
        document.getElementById('col_table').insertAdjacentHTML('beforeend', htmlInsert);
    } else {
        alert('error');
    }
};

function toggleData(datos, valor){
    if(document.getElementById('col' + valor).innerHTML === ""){
        document.getElementById('col' + valor).innerHTML = datos.nsTexto + "<br><br>" + datos.agTexto;
    } else {
        document.getElementById('col' + valor).innerHTML = "";
    }
}