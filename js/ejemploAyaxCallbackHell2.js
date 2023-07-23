// crear el objeto XMLHttpRequest
var xhr = new XMLHttpRequest ();

// abrir la solicitud para obtener el nombre
xhr.open ('GET', 'https://api.example.com/nombre');

// enviar la solicitud
xhr.send ();

// definir la función de devolución de llamada para el nombre
xhr.onload = function () {
  // comprobar si la solicitud fue exitosa
  if (xhr.status == 200) {
    // guardar el nombre en una variable
    var nombre = xhr.responseText;

    // crear otro objeto XMLHttpRequest para el email
    var xhr2 = new XMLHttpRequest ();

    // abrir la solicitud para obtener el email
    xhr2.open ('GET', 'https://api.example.com/email');

    // enviar la solicitud
    xhr2.send ();

    // definir la función de devolución de llamada para el email
    xhr2.onload = function () {
      // comprobar si la solicitud fue exitosa
      if (xhr2.status == 200) {
        // guardar el email en una variable
        var email = xhr2.responseText;

        // crear otro objeto XMLHttpRequest para el teléfono
        var xhr3 = new XMLHttpRequest ();

        // abrir la solicitud para obtener el teléfono
        xhr3.open ('GET', 'https://api.example.com/telefono');

        // enviar la solicitud
        xhr3.send ();

        // definir la función de devolución de llamada para el teléfono
        xhr3.onload = function () {
          // comprobar si la solicitud fue exitosa
          if (xhr3.status == 200) {
            // guardar el teléfono en una variable
            var telefono = xhr3.responseText;

            // mostrar los datos del usuario en la consola
            console.log ('Nombre: ' + nombre);
            console.log ('Email: ' + email);
            console.log ('Teléfono: ' + telefono);
          }
        };
      }
    };
  }
};
