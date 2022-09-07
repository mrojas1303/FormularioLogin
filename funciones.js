var usuarioRegistrado = "martincommisso@hotmail.com";
var passwordRegistrada = "123456";

function validarContraseña (){
    let contraseña1 = document.getElementById('ingresoContraseña').value;
    let contraseña2 = document.getElementById('repitoContraseña').value;
    if (contraseña1!=null){
        if(contraseña1==contraseña2)
       return true;
    }
}

function validarUsuario(){
    let usuario = document.getElementById('ingresarUsuario').value;
    let password = document.getElementById('ingresarPassword').value;
    if(usuario==usuarioRegistrado && passwordRegistrada==password)
    return alert("Ingreso exitoso");
    else alert("Usuario o contraseña invalida");
}

function mostrarRegistro (){
    document.getElementById('contenedor-registro').style.visibility="visible";
    document.getElementById('contenedor-formulario').style.visibility="hidden";
}

function mostrarFormulario(){
    document.getElementById('contenedor-registro').style.visibility="hidden";
    document.getElementById('contenedor-formulario').style.visibility="visible";
}

function registrado(){
   if(validarContraseña()){
   alert("Usuario registrado");
   mostrarFormulario();}
   else alert("Contraseña no coincide");
 
}