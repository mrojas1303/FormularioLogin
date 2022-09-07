function validarContraseña (){
    let contraseña1 = document.getElementById('ingresoContraseña').value;
    let contraseña2 = document.getElementById('repitoContraseña').value;
    if (contraseña1!=null){
        if(contraseña1!=contraseña2)
        alert("Las contraseñas no son iguales");
    } else return true;
}

function mostrarRegistro (){
    document.getElementById('contenedor-registro').style.visibility="visible";
    document.getElementById('contenedor-formulario').style.visibility="hidden";
}

function mostrarFormulario(){
    document.getElementById('contenedor-registro').style.visibility="hidden";
    document.getElementById('contenedor-formulario').style.visibility="visible";
}

function validarCampos(){
    if(document.querySelectorAll('input[type="text"]').values!=null)
    return true;
    else alert("Falta completar campos");
}


function registrado(){
    document.getElementById('boton-aceptar');
    validarCampos();
    if(validarContraseña()){
    alert("Usuario registrado");
    mostrarFormulario();}
}