let cuantos=0;

function generaNumeros(){
    if(cuantos<5){
        let digitos;
        cuantos++;
        digitos=Math.trunc(Math.random()*10);

        switch(cuantos){
            case 1:
                document.getElementById("unidades").innerHTML=digitos;
                break;
            case 2:
                document.getElementById("decenas").innerHTML=digitos;
                break;
            case 3:
                document.getElementById("centenas").innerHTML=digitos;
                break;
            case 4:
                document.getElementById("unidadesMillar").innerHTML=digitos;
                break;
            case 5:
                document.getElementById("decenasMillar").innerHTML=digitos;
                break;
        }
    }
    else{
        alert("Todos los numeros generados");
    }
    
}

function borraNumeros(){
    document.getElementById("unidades").innerHTML="";
    document.getElementById("decenas").innerHTML="";
    document.getElementById("centenas").innerHTML="";
    document.getElementById("unidadesMillar").innerHTML="";
    document.getElementById("decenasMillar").innerHTML="";
    cuantos=0;
}