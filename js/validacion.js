function validar(formulario){

    if(formulario.personaje.value.length < 5){
        alert("Escriba por lo menos 5 Caracteres para el personaje");
        formulario.personaje.focus();
        return false;
    }

    var checkOK = "QWERTYUIOPASDFGHJKLZXCVBNMÑ"
    +"qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = formulario.personaje.value;

    var allValido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente letras en el campo de personaje");
        formulario.personaje.focus();
        return false;
    }

        //
    
        if(formulario.historia.value.length < 5){
            alert("Escriba por lo menos 5 Caracteres para la historia");
            formulario.historia.focus();
            return false;
        }
    
        var checkOK = "QWERTYUIOPASDFGHJKLZXCVBNMÑ"
        +"qwertyuiopasdfghjklñzxcvbnm";
    
        var checkStr = formulario.historia.value;
    
        var allValido = true;
    
        for(var i = 0; i < checkStr.length; i++){
            var ch = checkStr.charAt(i);
            for(var j = 0; j < checkOK.length; j++){
                if(ch == checkOK.charAt(j))
                break;
            }
            if(j == checkOK.length){
                allValido = false;
                break;
            }
        }
    
        if(!allValido){
            alert("Escriba unicamente letras en el campo de historia");
            formulario.historia.focus();
            return false;
        }
}