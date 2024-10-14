const form = document.querySelector("#form")
const nome  = document.querySelector("#nome")
const email = document.querySelector("#email")
const senha = document.querySelector("#senha")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validaName()
    validaEmail()
    validaSenha()
})

function validaName() {
    const validaNome = nome.value;

    if(validaNome === "") {
        alert("nome invalido")
        return
    }
}

function validaEmail() {
    const emailValido = email.value;

    if(emailValido === "") {
        alert("email invalido")
        return
    }
}

function validaSenha() {

    const senhaInvalida = senha.value;

    if(senhaInvalida === "") {
        alert("senha invalida")
        return
    }
}