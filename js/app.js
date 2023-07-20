const $btnEnviar = document.getElementById("enviar");

//Al recargar la página mostrame todos mis contactos
document.addEventListener("DOMContentLoaded", () => {
    mostrarTodosLosContactos();
});

//Al hacer click en enviar: 1)Validar los datos, 2)Agregar el contacto
$btnEnviar.addEventListener("submit", () => {
    let nombre = document.getElementById("nom").value;
    let apellido = document.getElementById("ape").value;
    let telefono = document.getElementById("tel").value;
    let direccion = document.getElementById("dir").value;
    let email = document.getElementById("email").value;

    const datos = {
        "nombre": nombre,
        "apellido": apellido,
        "telefono": telefono,
        "direccion": direccion,
        "email": email
    }
    
    //const hayErrores = validarFormulario(datos);

    if(!hayErrores) {
        enviarDatos(datos);
    }

});
