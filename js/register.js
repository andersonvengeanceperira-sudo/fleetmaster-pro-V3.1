function registrar(){

let nome = document.getElementById("nome").value
let email = document.getElementById("email").value
let senha = document.getElementById("senha").value

let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]")

usuarios.push({
nome,
email,
senha
})

localStorage.setItem("usuarios",JSON.stringify(usuarios))

alert("Usuário criado com sucesso")

window.location="index.html"

}
