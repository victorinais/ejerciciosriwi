
function cambiarTema(){

    let tema = document.getElementById("tema").value;

    if(tema == 2){
        document.getElementById("body").classList.remove("light");
        document.getElementById("body").classList.add("dark");
    } else {
        document.getElementById("body").classList.remove("dark");
        document.getElementById("body").classList.add("light");
    }
    
}