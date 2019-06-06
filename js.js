var puntaje_maximo = 52.50;
var puntaje_resultante = 0.0;

function comprobarAnios(valor){
    if(Number(valor)){
        valor = Number(valor)
        if(valor % 1 == 0 && valor <= 10 && valor >= 0){
            return true; // entero
        } else {
            return false; // fallo, flotante
        }
    } else {
        return false; // fallo, no es un numero
    }
}

function comprobarRadios(direccion){
    var radios = document.getElementsByName(direccion);
    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            return radios[i].value;
        }
    }
}

function borrarCampo(valor){
    valor.value = "";
    valor.style['color'] = "black";
    valor.style['text-align'] = "left";
}

function ttyav_obtenerResultado(){
    if(puntaje_resultante > 0){
        return NaN;
    }

    puntaje_resultante = 0.0;

    var flag = true;
    // A
    flag = comprobarAnios(document.getElementsByName("ttyav_titulo")[0].value);
    // SI ES ERROR
    if(!flag){
        document.getElementsByName("ttyav_resultado")[0].value = "ERROR";
        return NaN;
    }
    var valor = document.getElementsByName("ttyav_titulo")[0].value;
    puntaje_resultante += 1.0;

    // B
    flag = comprobarAnios(document.getElementsByName("ttyav_antiguedad_titulo")[0].value);
    // SI ES ERROR
    if(!flag){
        document.getElementsByName("ttyav_resultado")[0].value = "ERROR";
        return NaN;
    }
    var valor = document.getElementsByName("ttyav_antiguedad_titulo")[0].value;
    puntaje_resultante += Number(valor) * 0.25;

    // C
    valor = comprobarRadios("ttyav_promedio_titulo");
    puntaje_resultante += Number(valor);

    // D
    flag = comprobarAnios(document.getElementsByName("ttyav_antiguedad_doc_edsup")[0].value);
    // SI ES ERROR
    if(!flag){
        document.getElementsByName("ttyav_resultado")[0].value = "ERROR";
        return NaN;
    }
    var valor = document.getElementsByName("ttyav_antiguedad_doc_edsup")[0].value;
    puntaje_resultante += Number(valor) * 0.5;

    // E
    flag = comprobarAnios(document.getElementsByName("ttyav_antiguedad_doc_misma_area")[0].value);
    // SI ES ERROR
    if(!flag){
        document.getElementsByName("ttyav_resultado")[0].value = "ERROR";
        return NaN;
    }
    var valor = document.getElementsByName("ttyav_antiguedad_doc_misma_area")[0].value;
    puntaje_resultante += Number(valor) * 0.5;

    // F
    flag = comprobarAnios(document.getElementsByName("ttyav_antiguedad_doc_desfav")[0].value);
    // SI ES ERROR
    if(!flag){
        document.getElementsByName("ttyav_resultado")[0].value = "ERROR";
        return NaN;
    }
    var valor = document.getElementsByName("ttyav_antiguedad_doc_desfav")[0].value;
    puntaje_resultante += Number(valor) * 0.25;

    // G
    flag = comprobarAnios(document.getElementsByName("ttyav_antiguedad_doc_mismo_escalafon")[0].value);
    // SI ES ERROR
    if(!flag){
        document.getElementsByName("ttyav_resultado")[0].value = "ERROR";
        return NaN;
    }
    var valor = document.getElementsByName("ttyav_antiguedad_doc_mismo_escalafon")[0].value;
    puntaje_resultante += Number(valor) * 0.25;

    // H
    flag = comprobarAnios(document.getElementsByName("ttyav_antiguedad_doc_perspectivas")[0].value);
    // SI ES ERROR
    if(!flag){
        document.getElementsByName("ttyav_resultado")[0].value = "ERROR";
        return NaN;
    }
    var valor = document.getElementsByName("ttyav_antiguedad_doc_perspectivas")[0].value;
    puntaje_resultante += Number(valor) * 0.25;

    // I
    flag = comprobarAnios(document.getElementsByName("ttyav_antiguedad_doc_perspectivas_desfavorables")[0].value);
    // SI ES ERROR
    if(!flag){
        document.getElementsByName("ttyav_resultado")[0].value = "ERROR";
        return NaN;
    }
    var valor = document.getElementsByName("ttyav_antiguedad_doc_perspectivas_desfavorables")[0].value;
    puntaje_resultante += Number(valor) * 0.1;

    // J
    valor = comprobarRadios("ttyav_antiguedad_calif_ult");
    puntaje_resultante += Number(valor);

    // K
    flag = comprobarAnios(document.getElementsByName("ttyav_antiguedad_otros_titulos")[0].value);
    // SI ES ERROR
    if(!flag){
        document.getElementsByName("ttyav_resultado")[0].value = "ERROR";
        return NaN;
    }
    var valor = document.getElementsByName("ttyav_antiguedad_otros_titulos")[0].value;
    puntaje_resultante += 1.0;

    //RESULTADO
    if(puntaje_resultante > puntaje_maximo){
        document.getElementsByName("ttyav_resultado")[0].value = "ERROR";
        return NaN;
    } else {
        document.getElementsByName("ttyav_resultado")[0].value = puntaje_resultante.toFixed(2);
    }
}
