
function operaciones() {

    let operaciones = document.getElementById('operacion').value;
    let numero1 = document.getElementById("numero-1").value;
    let numero2 = document.getElementById("numero-2").value;
    numero1 = parseInt(numero1); 
    numero2 = parseInt(numero2);

    if (operaciones == '+'){
        resultado = numero1 + numero2;
    }else if (operaciones == '-'){
        resultado = numero1 - numero2;
    }else if (operaciones == '*'){
        resultado = numero1 * numero2;
    }else if (operaciones == '/'){
        resultado = numero1 / numero2;
    }

    document.getElementById("resultado").innerText = `${numero1} ${operaciones} ${numero2} = ${resultado}` ;
    document.getElementById("numero-1").value = "";
    document.getElementById("numero-2").value = "";
    document.getElementById("operacion").value = "";
    
    
}