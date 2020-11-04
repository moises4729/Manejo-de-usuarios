var information = []

function array() {
    var element = document.getElementById("list").value

    if (element[0] != " ") { //Verifica si no hay espacios al principio
        element = element.toLowerCase()
        information.push(element) //Coloco la informacion en mi array 

        document.getElementById("result").innerHTML += (`${information.indexOf(element)} - ${element} <br>`)

    }

    else {
        alert("No se permiten colocar espacios al principio")
    }

    document.getElementById("list").value = ""

}

function index(x) {
    x = x.value.toLowerCase()

    if (information.length === 0) { //Verificar array vacio
        alert("Error! no ha ingresado ningun dato")
        document.getElementById("position").value = ""
    }

    else if (x.value === ""){ //Ejecutar en caso de ingresar un dato vacio
        document.getElementById("result2").innerHTML = ""
    }

    else {

        var user = information.indexOf(x) //Capturar el indicie del elemento

        if (user != -1) {
            document.getElementById("result2").innerHTML = ("El usuario tiene la posición: " + user)
            
        }

        else {
            alert("Error! el usuario proporcionado no existe")
            document.getElementById("position").value = ""
            document.getElementById("result2").innerHTML = ""
        }
    }
}

function reset(params) {

    if (confirm("¿Deseas borrar todos los datos?")){
        //Estoy borrando todos los datos existentes
        document.getElementById("result").innerHTML = ""
        document.getElementById("result2").innerHTML = ""
        document.getElementById("list").value = "" 
        document.getElementById("position").value = ""

        information = [] //Borro tambien el array
    }
}