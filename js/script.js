/* esta funcion agrega los valores de cada boton a al input principal o pantalla */
function agregar(valor){
    document.getElementById("pantalla").value += valor; 
}

/* esta funcion vacía la pantalla */
function borrar(){
    document.getElementById("pantalla").value = "";
}

/* esta funcion toma lo que hay en la pantalla y hace los calculos */
function calcular(){
    const valorPantalla = document.getElementById("pantalla").value;
    const resultado = eval(valorPantalla);
    document.getElementById("pantalla").value = resultado;
}
