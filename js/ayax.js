/*const ayax = (options) => {
    let {url, metodo, exito, error, datos} = options;
    const xhttp = new XMLHttpRequest();

    xhttp.addEventListener("readystatechange", () => {
        if(xhttp.readyState === 4) {
            if(xhttp.status >= 200 && xhttp.status <= 300) {
                let json = JSON.parse(xhttp.responseText);
                exito(json);
            } else {
                let mensaje = xhttp.statusText;
                error("Error " + xhttp.status + " " + mensaje);
            }
        }
    });

    xhttp.open(metodo, url);
    xhttp.setRequestHeader("Content-type","application/json; charset=utf-8");
    xhttp.send(JSON.stringify(datos));
}

const mostrarTodosLosContactos = () => {
    ayax({
        metodo: "get",
        url: "http://localhost:3000/contactos",
        exito: (res) => {console.log(res)},
        error: (err) => {console.error(err)}
    });
};*/

