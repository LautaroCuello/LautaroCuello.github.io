function obtainTextInput(valor){
    var inputs = document.getElementById(valor).childNodes[1].getElementsByTagName("div");
    var inputs_result = new Array();
    for(var i = 0; i < inputs.length; i++){
        aux = document.getElementById(valor).childNodes[1].getElementsByTagName("div")[i].getElementsByTagName("input");
        if(aux.length == 1){
            inputs_result.push(aux[0]);
        }
    }
    return inputs_result;
}

function obtainRadioInput(valor){
    var inputs = document.getElementById(valor).childNodes[1].getElementsByTagName("div");
    var inputs_result = new Array();
    for(var i = 0; i < inputs.length; i++){
        aux = document.getElementById(valor).childNodes[1].getElementsByTagName("div")[i].getElementsByTagName("input");
        if(aux.length > 1){
            inputs_result.push(aux);
        }
    }
    return inputs_result;
}

function checkNumber(value){
    if(Number(value) >= 0){
        return true;
    } else {
        return false;
    }
}

function checkLimit(value, limit){
    if(Number(value) <= limit){
        return true;
    } else {
        return false;
    }
}

function checkInteger(value){
    if(Number(value) % 2 == 0){
        return true;
    } else {
        return false;
    }
}

function checkRadio(value){
    for(var i = 0; i < value.length; i++){
        if(value[i].checked){
            return value[i].value;
        }
    }
}

function validateData(data, is_Number, is_Integer, limit, multiply, location){
    if(is_Number){
        if(checkNumber(data)){
            if(is_Integer){
                if(checkInteger(data)){
                    if(checkLimit(data, limit)){
                        return Number(data) * multiply;
                    } else {
                        return " ERROR EN " + location
                    }
                } else {
                    return " ERROR EN " + location
                }
            } else {
                if(checkLimit(data, limit)){
                    return Number(data) * multiply;
                } else {
                    return " ERROR EN " + location
                }
            }
        } else {
            return " ER2ROR EN " + location
        }
    } else {
        return Number(checkRadio(data));
    }
}

function setResult(data){
    document.getElementsByName("ttyav_resultado")[0].value = data;
}

function borrarCampo(valor){
    valor.value = "";
    valor.style['color'] = "black";
    valor.style['text-align'] = "left";
}

function ttyav_obtenerResultado(){
    var ttyav_resultado = 0.00;
    var text_inputs = obtainTextInput("ttyav");
    var radio_inputs = obtainRadioInput("ttyav");

    //A
    ttyav_resultado += validateData(text_inputs[0].value, true, false, 25.00, 1.00, "A");
    console.log(ttyav_resultado);

    //B
    ttyav_resultado += validateData(text_inputs[1].value, true, true, 10, 0.25, "B");
    console.log(ttyav_resultado);

    //C
    ttyav_resultado += validateData(radio_inputs[0], false, false, 0, 0, "C");
    console.log(ttyav_resultado);

    //D
    ttyav_resultado += validateData(text_inputs[2].value, true, true, 10.00, 0.5, "D");
    console.log(ttyav_resultado);

    //E
    ttyav_resultado += validateData(text_inputs[3].value, true, true, 10.00, 0.5, "E");
    console.log(ttyav_resultado);

    //F
    ttyav_resultado += validateData(text_inputs[4].value, true, true, 10.00, 0.25, "F");
    console.log(ttyav_resultado);

    //G
    ttyav_resultado += validateData(text_inputs[5].value, true, true, 10.00, 0.25, "G");
    console.log(ttyav_resultado);

    //H
    ttyav_resultado += validateData(text_inputs[6].value, true, true, 10.00, 0.25, "H");
    console.log(ttyav_resultado);

    //I
    ttyav_resultado += validateData(text_inputs[7].value, true, true, 10.00, 0.1, "I");
    console.log(ttyav_resultado);

    //J
    ttyav_resultado += validateData(radio_inputs[1], false, false, 0, 0, "J");
    console.log(ttyav_resultado);

    //K
    ttyav_resultado += validateData(text_inputs[8].value, true, false, 5.00, 1.00, "K");
    console.log(ttyav_resultado);

    setResult(ttyav_resultado);

}