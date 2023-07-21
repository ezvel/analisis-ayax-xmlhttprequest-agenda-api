const ayax = (parametros) => {
    let {url, metodo, success, error, data} = parametros;
    xhttp = new XMLHttpRequest();

    xhttp.addEventListener("readystatechange", () => {
        if(xhttp.readyState === 4 ) {
            if(xhttp.status >= 200 && xhttp.status <= 300) {
                //console.log(xhttp);
                let response = JSON.parse(xhttp.responseText);
                success(response);
            } else {
                const estadoRespuesta = xhttp.status;
                const mensajeRespuesta = xhttp.statusText;
                error(`Error ${estadoRespuesta} ${mensajeRespuesta}`);
            } 
        }
    });

    xhttp.open(metodo, url);
    xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhttp.send(JSON.stringify(data));

}



const mostrarContactos = () => {
    ayax({
        url: "http://localhost:3000/contactos",
        metodo : "GET",
        success: (res) => {
            $table = document.querySelector(".table__body");
            $fragment = document.createDocumentFragment();

            res.forEach( (objeto) => {
                $row = document.createElement("tr");
                $row.innerHTML = "";
                $row.innerHTML += `
                    <td>${objeto.nombre}</td>
                    <td>${objeto.apellido}</td>
                    <td>${objeto.telefono}</td>
                    <td>${objeto.direccion}</td>
                    <td>${objeto.email}</td>
                    <td>
                        <button class="editar" onclick="llenarDatosDelContactoAlFormulario(event)" data-id="${objeto.id}" data-nombre="${objeto.nombre}" data-apellido="${objeto.apellido}" data-telefono="${objeto.telefono}" data-direccion="${objeto.direccion}" data-email="${objeto.email}">Editar</button>
                        <button class="eliminar" onclick="eliminarContacto(event)" data-id="${objeto.id}">Elminar</button>
                    </td>
                `;
                $fragment.appendChild($row);
            })
            $table.appendChild($fragment);
        },

        error: (err) => {
            $error = document.getElementById("error");
            $error.textContent = err;
        }
    });
}

const agregarContacto = (datos) => {

    let {nombre, apellido, telefono, direccion, email} = datos;

    ayax({
        url: "http://localhost:3000/contactos",
        metodo: "POST",
        success: (res) => {
            location.reload();
        },
        error: (err) => {
            $error = document.getElementById("error");
            $error.textContent = err;
        },
        data: {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            direccion: direccion,
            email: email
        }
    })
}

const modificarContacto = (datos)  => {
    let {id, nombre, apellido, telefono, direccion, email} = datos;

    ayax({
        url: `http://localhost:3000/contactos/${id}`,
        metodo: "PUT",
        success: (res) => {
            location.reload();
        },
        error: (err) => {
            $error = document.getElementById("error");
            $error.textContent = err;
        },
        data: {
            id: id,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            direccion: direccion,
            email: email
        }
    })
}

const eliminarContacto = (e) => {
    const id = e.target.dataset.id;
    const isDelete = confirm("¿Está seguro de eliminar?");
    
    if(isDelete) {
        ayax({
            url: `http://localhost:3000/contactos/${id}`,
            metodo: "DELETE",
            success: (res) => {
                location.reload();
            },
            error: (err) => {
                $error = document.getElementById("error");
                $error.textContent = err;
            }
        })
    }
}