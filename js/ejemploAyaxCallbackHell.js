// hacer la solicitud para obtener el nombre
$.ajax ({
    url: 'https://api.example.com/nombre',
    method: 'GET',
    success: function (nombre) {
      // guardar el nombre en una variable
      var nombre = nombre;
  
      // hacer la solicitud para obtener el email
      $.ajax ({
        url: 'https://api.example.com/email',
        method: 'GET',
        success: function (email) {//.onload
          // guardar el email en una variable
          var email = email;
  
          // hacer la solicitud para obtener el teléfono
          $.ajax ({
            url: 'https://api.example.com/telefono',
            method: 'GET',
            success: function (telefono) {
              // guardar el teléfono en una variable
              var telefono = telefono;
  
              // mostrar los datos del usuario en la consola
              console.log ('Nombre: ' + nombre);
              console.log ('Email: ' + email);
              console.log ('Teléfono: ' + telefono);
            },
            error: function (jqXHR, textStatus, errorThrown) {
              // manejar el error
              console.error ('Ocurrió un error al obtener el teléfono: ' + errorThrown);
            }
          });
        },
        error: function (jqXHR, textStatus, errorThrown) {
          // manejar el error
          console.error ('Ocurrió un error al obtener el email: ' + errorThrown);
        }
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // manejar el error
      console.error ('Ocurrió un error al obtener el nombre: ' + errorThrown);
    }
  });
  