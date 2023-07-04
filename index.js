//Se llama al boton
const btn = document.getElementById("btn")
const body = document.querySelector("body")
let toogle = false

//Se agrega el evento del boton
btn.addEventListener("click", function mode() {
    toogle = !toogle

    console.log(toogle)

    if(toogle == false){
        body.style.backgroundColor = "white"
    }

    if(toogle == true){
        body.style.backgroundColor = "black"
    }
})


